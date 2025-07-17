'use client'
import { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import React, { useRef } from 'react'

export const CodeBlock: React.FC<{ language?: string; children: React.ReactNode }> = ({
  language = 'plaintext',
  children,
}) => {
  const codeRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [children, language])
  return (
    <pre className="bg-gray-900 p-3 md:p-4 rounded-lg overflow-x-auto mb-3 md:mb-4 text-xs md:text-sm">
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  )
}
