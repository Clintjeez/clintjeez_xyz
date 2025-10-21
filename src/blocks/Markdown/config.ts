import type { Block } from 'payload'

export const Markdown: Block = {
  slug: 'markdown-block',
  interfaceName: 'MarkdownBlock',
  labels: {
    singular: 'Markdown Block',
    plural: 'Markdown Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      label: 'Markdown Content',
      required: true,
      admin: {
        description: 'Write your content using Markdown syntax. Supports GitHub Flavored Markdown (GFM).',
        placeholder: '# Hello World\n\nThis is **markdown** content with *formatting*.',
        rows: 10,
      },
    },
    {
      name: 'enableHTML',
      type: 'checkbox',
      label: 'Enable HTML (Sanitized)',
      defaultValue: false,
      admin: {
        description: 'Allow HTML tags in markdown (will be sanitized for security).',
      },
    },
  ],
}
