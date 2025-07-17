import type { CollectionConfig } from 'payload'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) =>
            value ||
            data?.title
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, ''),
        ],
      },
    },
    {
      name: 'postDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'code-block',
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
                      { label: 'Python', value: 'python' },
                      { label: 'Java', value: 'java' },
                      { label: 'C++', value: 'cpp' },
                      { label: 'HTML', value: 'html' },
                      { label: 'CSS', value: 'css' },
                      { label: 'JSON', value: 'json' },
                      { label: 'Bash', value: 'bash' },
                      { label: 'SQL', value: 'sql' },
                    ],
                  },
                  {
                    name: 'code',
                    type: 'textarea',
                    label: 'Code',
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
              },
            ],
          }),
        ],
      }),
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'coverImage',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: false,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Meta',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'metaImage',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
  ],
}
