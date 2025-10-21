'use client'

import React, { useState, useEffect } from 'react'
import type { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CodeBlock } from './RenderBlock/CodeBlock'

interface RichTextNode {
  type: string
  children?: RichTextNode[]
  text?: string
  format?: number
  url?: string
  openInNewTab?: boolean
  rel?: string
  value?: string
  language?: string
  version?: number
  direction?: string
  tag?: string
  indent?: number
  listType?: string
  start?: number
  checked?: boolean
  src?: string
  altText?: string
  width?: number
  height?: number
  showCaption?: boolean
  caption?: RichTextNode[]
  fields?: {
    blockType?: string
    language?: string
    code?: string
    filename?: string
    caption?: string
    prompt?: string
    text?: string
    markdown?: any
  }
  id?: string
}

interface RichTextRendererProps {
  content: any // PayloadCMS Lexical content structure
  className?: string
}

// Client-side hydration check
function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

// Subcomponent for images with error fallback
const ImageWithFallback: React.FC<{
  src: string
  alt: string
  width: number
  height: number
  className?: string
}> = ({ src, alt, width, height, className }) => {
  const [imgError, setImgError] = useState(false)
  if (imgError) {
    return (
      <div className="w-full h-40 flex items-center justify-center bg-gray-800 rounded-lg">
        <span className="text-gray-400 text-sm">Image failed to load</span>
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  )
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content, className = '' }) => {
  const isClient = useIsClient()

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return <div className={className}>Loading...</div>
  }
  if (!content) {
    console.log('RichTextRenderer: No content provided')
    return null
  }

  console.log('RichTextRenderer: Content structure:', JSON.stringify(content, null, 2))

  // Handle PayloadCMS Lexical editor structure
  const getNodes = (content: any): RichTextNode[] => {
    if (content.root && content.root.children) {
      console.log('RichTextRenderer: Found root.children structure')
      return content.root.children
    }
    if (Array.isArray(content)) {
      console.log('RichTextRenderer: Content is an array')
      return content
    }
    console.log('RichTextRenderer: No valid structure found')
    return []
  }

  const nodes = getNodes(content)
  if (nodes.length === 0) {
    return null
  }

  const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
    if (!node) return null

    // Handle text nodes
    if (node.text !== undefined) {
      let textElement: React.ReactNode = node.text

      // Apply formatting
      if (node.format) {
        if (node.format & 1) textElement = <strong key={index}>{textElement}</strong>
        if (node.format & 2) textElement = <em key={index}>{textElement}</em>
        if (node.format & 4) textElement = <u key={index}>{textElement}</u>
        if (node.format & 8)
          textElement = (
            <code key={index} className="bg-gray-800 px-1 py-0.5 rounded text-sm">
              {textElement}
            </code>
          ) // Code
        if (node.format & 16) textElement = <del key={index}>{textElement}</del> // Strikethrough
        if (node.format & 32) textElement = <sub key={index}>{textElement}</sub> // Subscript
        if (node.format & 64) textElement = <sup key={index}>{textElement}</sup> // Superscript
      }

      return textElement
    }

    console.log('DATA NODE', node.type === 'block')

    // Handle different node types
    switch (node.type) {
      case 'paragraph':
        return (
          <p
            key={index}
            className="mb-3 md:mb-4 leading-relaxed text-[#777778] text-sm md:text-base"
          >
            {node.children?.map((child: RichTextNode, childIndex: number) => (
              <React.Fragment key={child.id ?? childIndex}>
                {renderNode(child, childIndex)}
              </React.Fragment>
            ))}
          </p>
        )

      case 'heading':
        const headingLevel = node.tag || 'h2'
        const headingClasses = {
          h1: 'text-2xl md:text-3xl font-bold mb-4 md:mb-6 mt-6 md:mt-8',
          h2: 'text-xl md:text-2xl font-bold mb-3 md:mb-4 mt-5 md:mt-6',
          h3: 'text-lg md:text-xl font-bold mb-2 md:mb-3 mt-4 md:mt-5',
          h4: 'text-base md:text-lg font-bold mb-2 mt-3 md:mt-4',
          h5: 'text-sm md:text-base font-bold mb-2 mt-2 md:mt-3',
          h6: 'text-xs md:text-sm font-bold mb-1 mt-2',
        }

        // Ensure headingLevel is always a valid heading string (h1-h6)
        const validHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
        const HeadingTag = (
          validHeadings.includes(headingLevel as any) ? headingLevel : 'h2'
        ) as keyof JSX.IntrinsicElements
        return (
          <HeadingTag
            key={index}
            className={headingClasses[headingLevel as keyof typeof headingClasses]}
          >
            {node.children?.map((child: RichTextNode, childIndex: number) => (
              <React.Fragment key={child.id ?? childIndex}>
                {renderNode(child, childIndex)}
              </React.Fragment>
            ))}
          </HeadingTag>
        )

      case 'list':
        const ListTag = node.listType === 'number' ? 'ol' : 'ul'
        const listClasses =
          node.listType === 'number'
            ? 'list-decimal list-inside mb-3 md:mb-4 space-y-1 text-[#777778] text-sm md:text-base'
            : 'list-disc list-inside mb-3 md:mb-4 space-y-1 text-[#777778] text-sm md:text-base'

        return (
          <ListTag key={index} className={listClasses}>
            {node.children?.map((child: RichTextNode, childIndex: number) => (
              <React.Fragment key={child.id ?? childIndex}>
                {renderNode(child, childIndex)}
              </React.Fragment>
            ))}
          </ListTag>
        )

      case 'listitem':
        return (
          <li key={index} className="mb-1">
            {node.children?.map((child: RichTextNode, childIndex: number) => (
              <React.Fragment key={child.id ?? childIndex}>
                {renderNode(child, childIndex)}
              </React.Fragment>
            ))}
          </li>
        )

      case 'link':
        return (
          <Link
            key={index}
            href={node.url || '#'}
            target={node.openInNewTab ? '_blank' : undefined}
            rel={node.openInNewTab ? 'noopener noreferrer' : undefined}
            className="text-blue-400 hover:text-blue-300 underline text-sm md:text-base"
          >
            {node.children?.map((child: RichTextNode, childIndex: number) => (
              <React.Fragment key={child.id ?? childIndex}>
                {renderNode(child, childIndex)}
              </React.Fragment>
            ))}
          </Link>
        )

      case 'block':
        // Check if this is a code block from PayloadCMS
        if (node.fields?.blockType === 'code-block') {
          return (
            <CodeBlock
              key={index}
              language={node.fields.language || 'plaintext'}
              filename={node.fields.filename}
              caption={node.fields.caption}
              prompt={node.fields.prompt}
              text={node.fields.text}
              markdown={node.fields.markdown}
            >
              {node.fields.code || ''}
            </CodeBlock>
          )
        }
        // Optionally handle other custom blocks here
        return null

      case 'image':
        // Support both string and object for src
        let imageUrl = ''
        let imageAlt = ''
        if (typeof node.src === 'object' && node.src !== null) {
          const srcObj = node.src as any
          imageUrl = srcObj.url || ''
          imageAlt = srcObj.alt || node.altText || ''
        } else {
          imageUrl = node.src || ''
          imageAlt = node.altText || ''
        }
        return (
          <figure key={index} className="my-4 md:my-6">
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt}
              width={node.width || 800}
              height={node.height || 400}
              className="w-full h-auto rounded-lg"
            />
            {node.showCaption && node.caption && (
              <figcaption className="text-center text-xs md:text-sm text-gray-400 mt-2">
                {node.caption.map((captionNode: RichTextNode, captionIndex: number) =>
                  renderNode(captionNode, captionIndex),
                )}
              </figcaption>
            )}
          </figure>
        )

      case 'quote':
        return (
          <blockquote
            key={index}
            className="border-l-4 border-gray-600 pl-3 md:pl-4 my-4 md:my-6 italic text-gray-300 text-sm md:text-base"
          >
            {node.children?.map((child: RichTextNode, childIndex: number) => (
              <React.Fragment key={child.id ?? childIndex}>
                {renderNode(child, childIndex)}
              </React.Fragment>
            ))}
          </blockquote>
        )

      case 'horizontalrule':
        return <hr key={index} className="my-6 md:my-8 border-gray-600" />

      case 'table':
        return (
          <div key={index} className="overflow-x-auto my-4 md:my-6">
            <table className="min-w-full border border-gray-600 text-xs md:text-sm">
              <tbody>
                {node.children?.map((row: RichTextNode, rowIndex: number) =>
                  renderNode(row, rowIndex),
                )}
              </tbody>
            </table>
          </div>
        )

      case 'tablerow':
        return (
          <tr key={index} className="border-b border-gray-600">
            {node.children?.map((cell: RichTextNode, cellIndex: number) =>
              renderNode(cell, cellIndex),
            )}
          </tr>
        )

      case 'tablecell':
        return (
          <td key={index} className="px-2 md:px-4 py-1 md:py-2 border-r border-gray-600">
            {node.children?.map((child: RichTextNode, childIndex: number) =>
              renderNode(child, childIndex),
            )}
          </td>
        )

      case 'tableheadercell':
        return (
          <th
            key={index}
            className="px-2 md:px-4 py-1 md:py-2 border-r border-gray-600 font-bold bg-gray-800"
          >
            {node.children?.map((child: RichTextNode, childIndex: number) =>
              renderNode(child, childIndex),
            )}
          </th>
        )

      case 'upload':
        // PayloadCMS rich text 'upload' node for images
        if (node.value && typeof node.value === 'object' && 'url' in node.value) {
          const value = node.value as { url: string; alt?: string; width?: number; height?: number }
          return (
            <figure key={index} className="my-4 md:my-6">
              <ImageWithFallback
                src={value.url}
                alt={value.alt || ''}
                width={value.width || 800}
                height={value.height || 400}
                className="w-full h-auto rounded-lg"
              />
              {value.alt && (
                <figcaption className="text-center text-xs md:text-sm text-gray-400 mt-2">
                  {value.alt}
                </figcaption>
              )}
            </figure>
          )
        }
        return null

      default:
        // For unknown node types, try to render children
        if (node.children) {
          return (
            <div key={index}>
              {node.children.map((child: RichTextNode, childIndex: number) => (
                <React.Fragment key={child.id ?? childIndex}>
                  {renderNode(child, childIndex)}
                </React.Fragment>
              ))}
            </div>
          )
        }
        return null
    }
  }

  return (
    <div className={`rich-text-content ${className}`}>
      {nodes.map((node: RichTextNode, index: number) => renderNode(node, index))}
    </div>
  )
}

export default RichTextRenderer
