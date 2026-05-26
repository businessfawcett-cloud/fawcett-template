import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Relative path (e.g. /about) or full URL',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
