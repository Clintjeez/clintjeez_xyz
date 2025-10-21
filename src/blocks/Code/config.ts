import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code-block',
  interfaceName: 'CodeBlock',
  labels: {
    singular: 'Code Block',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'language',
      type: 'select',
      label: 'Language',
      defaultValue: 'javascript',
      options: [
        { label: 'JavaScript', value: 'javascript' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'TSX', value: 'tsx' },
        { label: 'JSX', value: 'jsx' },
        { label: 'Python', value: 'python' },
        { label: 'Java', value: 'java' },
        { label: 'C++', value: 'cpp' },
        { label: 'HTML', value: 'html' },
        { label: 'CSS', value: 'css' },
        { label: 'JSON', value: 'json' },
        { label: 'Bash', value: 'bash' },
        { label: 'SQL', value: 'sql' },
        { label: 'PowerShell', value: 'powershell' },
        { label: 'Text', value: 'text' },
        { label: 'Prompt', value: 'prompt' },
      ],
    },
    {
      name: 'filename',
      type: 'text',
      label: 'Filename (optional)',
    },
    {
      name: 'code',
      type: 'textarea',
      label: 'Content',
      required: true,
      admin: {
        style: {
          fontFamily: 'monospace',
        },
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption (optional)',
    },
  ],
}
