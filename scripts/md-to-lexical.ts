/**
 * Converts markdown content to Payload Lexical JSON.
 * Handles: headings (h1–h4), paragraphs, unordered/ordered lists,
 * horizontal rules, images, fenced code blocks, and inline
 * bold / italic / bold-italic / inline-code / links.
 *
 * Content starts after the first `---` divider (end of frontmatter).
 */

// ─── Format flags (must match RichTextRenderer.tsx) ───────────────────────────
const FMT = { BOLD: 1, ITALIC: 2, UNDERLINE: 4, CODE: 8, STRIKETHROUGH: 16 } as const

// ─── Node factories ───────────────────────────────────────────────────────────

function textNode(content: string, format = 0) {
  return { type: 'text' as const, version: 1, text: content, format, mode: 'normal' as const, detail: 0, style: '' }
}

function paragraphNode(children: object[]) {
  return { type: 'paragraph', version: 1, format: '', indent: 0, direction: 'ltr', children }
}

function headingNode(tag: string, children: object[]) {
  return { type: 'heading', version: 1, tag, format: '', indent: 0, direction: 'ltr', children }
}

function hrNode() {
  return { type: 'horizontalrule', version: 1 }
}

function listNode(listType: 'bullet' | 'number', children: object[]) {
  return { type: 'list', version: 1, listType, start: 1, tag: listType === 'bullet' ? 'ul' : 'ol', format: '', indent: 0, direction: 'ltr', children }
}

function listItemNode(value: number, children: object[]) {
  return { type: 'listitem', version: 1, value, format: '', indent: 0, direction: 'ltr', children }
}

// Payload's Lexical editor uses `upload` nodes for media (tied to the media collection).
// Infographic SVGs from /public/ can't be added that way, so we skip them — the
// surrounding text context makes them non-essential for readability.

function linkNode(url: string, children: object[]) {
  const external = url.startsWith('http')
  return {
    type: 'link',
    version: 2,
    fields: { linkType: 'custom', newTab: external, url },
    format: '',
    indent: 0,
    direction: 'ltr',
    children,
  }
}

function codeBlockNode(code: string, language: string) {
  return {
    type: 'block',
    version: 2,
    format: '',
    indent: 0,
    fields: {
      id: Math.random().toString(36).slice(2),
      blockName: '',
      blockType: 'code-block',
      code,
      language: language || 'text',
    },
  }
}

// ─── Inline parser ────────────────────────────────────────────────────────────

function parseInline(line: string): object[] {
  const nodes: object[] = []
  let i = 0
  let buffer = ''

  const flush = (format = 0) => {
    if (buffer) { nodes.push(textNode(buffer, format)); buffer = '' }
  }

  while (i < line.length) {
    // Inline image: skip cleanly
    if (line[i] === '!' && line[i + 1] === '[') {
      const closeText = line.indexOf(']', i + 2)
      if (closeText !== -1 && line[closeText + 1] === '(') {
        const closeUrl = line.indexOf(')', closeText + 2)
        if (closeUrl !== -1) { flush(); i = closeUrl + 1; continue }
      }
    }

    // Link: [text](url)
    if (line[i] === '[') {
      const closeText = line.indexOf(']', i + 1)
      if (closeText !== -1 && line[closeText + 1] === '(') {
        const closeUrl = line.indexOf(')', closeText + 2)
        if (closeUrl !== -1) {
          flush()
          const linkText = line.slice(i + 1, closeText)
          const url = line.slice(closeText + 2, closeUrl)
          nodes.push(linkNode(url, parseInline(linkText)))
          i = closeUrl + 1
          continue
        }
      }
    }

    // Bold + italic: ***text***
    if (line.startsWith('***', i)) {
      const end = line.indexOf('***', i + 3)
      if (end !== -1) {
        flush()
        nodes.push(textNode(line.slice(i + 3, end), FMT.BOLD | FMT.ITALIC))
        i = end + 3
        continue
      }
    }

    // Bold: **text**
    if (line.startsWith('**', i)) {
      const end = line.indexOf('**', i + 2)
      if (end !== -1) {
        flush()
        nodes.push(textNode(line.slice(i + 2, end), FMT.BOLD))
        i = end + 2
        continue
      }
      buffer += '**'; i += 2; continue
    }

    // Italic: *text*  (guard against ** already handled above)
    if (line[i] === '*' && line[i + 1] !== '*') {
      const end = line.indexOf('*', i + 1)
      if (end !== -1) {
        flush()
        nodes.push(textNode(line.slice(i + 1, end), FMT.ITALIC))
        i = end + 1
        continue
      }
      buffer += '*'; i++; continue
    }

    // Inline code: `text`
    if (line[i] === '`') {
      const end = line.indexOf('`', i + 1)
      if (end !== -1) {
        flush()
        nodes.push(textNode(line.slice(i + 1, end), FMT.CODE))
        i = end + 1
        continue
      }
      buffer += '`'; i++; continue
    }

    buffer += line[i++]
  }

  flush()
  return nodes
}

// ─── Block parser ─────────────────────────────────────────────────────────────

const STANDALONE_IMAGE = /^!\[(.*?)\]\((.*?)\)$/
const ORDERED_ITEM = /^(\d+)\. (.*)/
const UNORDERED_ITEM = /^[-*] (.*)/

export function markdownToLexical(markdown: string): object {
  const lines = markdown.split('\n')

  // Find where article content begins — after the first `---` (end of frontmatter)
  let contentStart = 0
  for (let j = 0; j < lines.length; j++) {
    if (lines[j].trim() === '---') { contentStart = j + 1; break }
  }

  const contentLines = lines.slice(contentStart)
  const nodes: object[] = []
  let pendingLines: string[] = []
  let inCode = false
  let codeLang = 'text'
  let codeAcc: string[] = []

  const flushParagraph = () => {
    const text = pendingLines.join(' ').trim()
    pendingLines = []
    if (!text) return
    const children = parseInline(text)
    if (children.length) nodes.push(paragraphNode(children))
  }

  let i = 0
  while (i < contentLines.length) {
    const raw = contentLines[i]
    const line = raw.trim()

    // ── Fenced code block ────────────────────────────────────────────────────
    if (line.startsWith('```')) {
      if (!inCode) {
        flushParagraph()
        inCode = true
        codeLang = line.slice(3).trim() || 'text'
        codeAcc = []
      } else {
        inCode = false
        nodes.push(codeBlockNode(codeAcc.join('\n'), codeLang))
      }
      i++; continue
    }
    if (inCode) { codeAcc.push(raw); i++; continue }

    // ── Empty line ────────────────────────────────────────────────────────────
    if (!line) { flushParagraph(); i++; continue }

    // ── Horizontal rule ───────────────────────────────────────────────────────
    if (line === '---') { flushParagraph(); nodes.push(hrNode()); i++; continue }

    // ── Headings ──────────────────────────────────────────────────────────────
    if (line.startsWith('#### ')) { flushParagraph(); nodes.push(headingNode('h4', parseInline(line.slice(5)))); i++; continue }
    if (line.startsWith('### ')) { flushParagraph(); nodes.push(headingNode('h3', parseInline(line.slice(4)))); i++; continue }
    if (line.startsWith('## ')) { flushParagraph(); nodes.push(headingNode('h2', parseInline(line.slice(3)))); i++; continue }
    if (line.startsWith('# ')) { flushParagraph(); nodes.push(headingNode('h1', parseInline(line.slice(2)))); i++; continue }

    // ── Standalone image — skip (infographics are /public/ SVGs, not Payload media) ──
    if (STANDALONE_IMAGE.test(line)) { flushParagraph(); i++; continue }

    // ── Unordered list ────────────────────────────────────────────────────────
    if (UNORDERED_ITEM.test(line)) {
      flushParagraph()
      const items: object[] = []
      let val = 1
      while (i < contentLines.length) {
        const m = UNORDERED_ITEM.exec(contentLines[i].trim())
        if (!m) break
        items.push(listItemNode(val++, parseInline(m[1])))
        i++
      }
      nodes.push(listNode('bullet', items))
      continue
    }

    // ── Ordered list ──────────────────────────────────────────────────────────
    if (ORDERED_ITEM.test(line)) {
      flushParagraph()
      const items: object[] = []
      let val = 1
      while (i < contentLines.length) {
        const m = ORDERED_ITEM.exec(contentLines[i].trim())
        if (!m) break
        items.push(listItemNode(val++, parseInline(m[2])))
        i++
      }
      nodes.push(listNode('number', items))
      continue
    }

    // ── Regular paragraph line ────────────────────────────────────────────────
    pendingLines.push(line)
    i++
  }

  flushParagraph()

  return { root: { type: 'root', version: 1, format: '', indent: 0, direction: 'ltr', children: nodes } }
}
