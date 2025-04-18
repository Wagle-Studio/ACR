import type { CollectionConfig } from 'payload'
import { useUniqueSlug } from '@/hooks/useUniqueSlug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
  hooks: {
    beforeChange: [useUniqueSlug],
  },
}
