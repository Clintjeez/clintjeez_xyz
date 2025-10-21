import React from 'react'
import { MarkdownRenderer } from './Component.client'

export type MarkdownBlockProps = {
  content: string
  enableHTML?: boolean
  blockType: 'markdown-block'
}

type Props = MarkdownBlockProps & {
  className?: string
}

export const MarkdownBlock: React.FC<Props> = ({ className, content, enableHTML }) => {
  return (
    <div className={`${[className].filter(Boolean).join(' ')} mx-4 my-6`}>
      <MarkdownRenderer content={content} enableHTML={enableHTML} />
    </div>
  )
}
