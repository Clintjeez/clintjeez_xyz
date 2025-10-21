'use client'
import { useEffect, useState } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import React, { useRef } from 'react'

interface CodeBlockProps {
  language?: string
  children: React.ReactNode
  filename?: string
  caption?: string
  prompt?: string
  text?: string
  markdown?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language = 'plaintext',
  children,
  filename,
  caption,
  prompt,
  text,
  markdown,
}) => {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [children, language])

  const handleCopy = async () => {
    try {
      const textToCopy = typeof children === 'string' ? children : children?.toString() || ''
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Determine border radius based on sections
  const hasTopSection = prompt || text || filename || language
  const topRoundedClass = hasTopSection ? '' : 'rounded-t-lg'
  const bottomRoundedClass = !caption && !markdown ? 'rounded-b-lg' : ''

  return (
    <div className="my-4 md:my-6 w-full">
      {/* Prompt Section */}
      {prompt && (
        <div className="bg-gray-800 border border-gray-700 p-3 md:p-4 rounded-t-lg text-sm md:text-base text-gray-300">
          <span className="font-semibold text-gray-200">Prompt: </span>
          <span className="whitespace-pre-wrap break-words">{prompt}</span>
        </div>
      )}

      {/* Text Section */}
      {text && (
        <div
          className={`bg-gray-800/70 ${
            prompt ? 'border-x border-b' : 'border'
          } ${!prompt ? 'rounded-t-lg' : ''} border-gray-700 p-3 md:p-4 text-sm md:text-base text-gray-300 whitespace-pre-wrap break-words`}
        >
          {text}
        </div>
      )}

      {/* Filename/Language Header with Copy Button */}
      <div
        className={`bg-gray-800 ${
          prompt || text ? 'border-x border-b' : 'border-t border-x'
        } ${!prompt && !text ? 'rounded-t-lg' : ''} border-gray-700 px-3 md:px-4 py-2.5 flex items-center justify-between gap-3`}
      >
        {/* Left side - Copy button and filename */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-700/50 hover:bg-gray-600 border border-gray-600 transition-all duration-200 group flex-shrink-0"
            aria-label="Copy code"
            title={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? (
              <svg
                className="w-3.5 h-3.5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>

          {/* Filename */}
          {filename && (
            <span className="text-xs md:text-sm text-gray-400 font-mono truncate">{filename}</span>
          )}
        </div>

        {/* Right side - Language */}
        {language && (
          <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-semibold flex-shrink-0">
            {language}
          </span>
        )}
      </div>

      {/* Code Block - Full height, word wrap, no horizontal scroll */}
      <pre
        className={`p-4 md:p-5 ${topRoundedClass} ${bottomRoundedClass} ${
          hasTopSection ? 'border-x border-b' : 'border'
        } border-gray-700`}
        style={{ backgroundColor: '#282c34' }}
      >
        <code
          ref={codeRef}
          className={`language-${language} text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words`}
        >
          {children}
        </code>
      </pre>

      {/* Caption */}
      {caption && (
        <div className="text-center text-xs md:text-sm text-gray-400 mt-3 italic px-2 whitespace-pre-wrap break-words">
          {caption}
        </div>
      )}

      {/* Markdown Section */}
      {markdown && (
        <div className="bg-gray-800/50 border-x border-b border-gray-700 rounded-b-lg p-3 md:p-4 text-sm md:text-base text-gray-300">
          <div className="prose prose-invert prose-sm md:prose-base max-w-none break-words">
            {markdown}
          </div>
        </div>
      )}
    </div>
  )
}
