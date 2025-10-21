import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'projectDescription',
      type: 'textarea',
      required: true,
      label: 'Project Description',
    },
    {
      name: 'stacks',
      type: 'array',
      required: true,
      label: 'Tech Stacks',
      fields: [
        {
          name: 'stack',
          type: 'text',
          required: true,
          label: 'Stack',
        },
      ],
    },
    {
      name: 'githubUrl',
      type: 'text',
      required: false,
      label: 'GitHub URL',
      admin: {
        placeholder: 'https://github.com/your-repo',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
      required: false,
      label: 'Live Project URL',
      admin: {
        placeholder: 'https://your-project.com',
      },
    },
  ],
}

export default Projects
