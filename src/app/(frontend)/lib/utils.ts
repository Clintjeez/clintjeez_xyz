export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return Math.max(1, minutes) // Ensure at least 1 minute read time
}

export function extractTextFromContent(content: any): string {
  if (!content) return ''

  if (typeof content === 'string') {
    return content
  }

  if (content.root && content.root.children) {
    return extractTextFromNodes(content.root.children)
  }

  if (Array.isArray(content)) {
    return extractTextFromNodes(content)
  }

  return ''
}

function extractTextFromNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return ''

  return nodes
    .map((node) => {
      if (typeof node === 'string') return node
      if (node?.text) return node.text
      if (node?.children) return extractTextFromNodes(node.children)
      return ''
    })
    .join(' ')
}

export function calculatePostReadTime(post: any): number {
  if (!post) return 1

  const text = extractTextFromContent(post.content)
  return calculateReadTime(text)
}

export function formatReadTime(minutes: number): string {
  if (minutes < 1) return 'Less than 1 min read'
  if (minutes === 1) return '1 min read'
  return `${minutes} min read`
}
