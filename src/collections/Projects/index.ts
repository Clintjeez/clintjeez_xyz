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
      name: 'screenshot',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Project Screenshot',
      admin: {
        description: 'Upload a screenshot or preview image of your project',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: false,
      label: 'Role',
      admin: {
        description: 'Job title or role, for work/experience entries (e.g. "AI Engineer")',
      },
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
      required: false,
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
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured',
      admin: {
        description: 'Show in the "Work & Experience" section on the homepage (top 6)',
        position: 'sidebar',
      },
    },
    {
      name: 'featuredOrder',
      type: 'number',
      required: false,
      label: 'Featured Order',
      admin: {
        description: 'Lower numbers appear first among featured items',
        position: 'sidebar',
        condition: (_, siblingData) => Boolean(siblingData?.featured),
      },
    },
  ],
}

export default Projects
