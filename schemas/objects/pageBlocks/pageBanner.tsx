import { TbSection } from 'react-icons/tb'

export default {
  name: 'pageBanner',
  type: 'object',
  title: 'Page Banner',
  icon: TbSection,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'items',
      type: 'array',
      validation: Rule => Rule.max(2).min(1),
      title: 'Image & Text',
      of: [
        {
          name: 'textObject',
          type: 'object',
          title: 'Text',
          fields: [{ type: 'minimal', title: 'Text', name: 'text' }],
          preview: {
            prepare() {
              return {
                title: 'Text'
              }
            }
          }
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        }
      ]
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'array',
      validation: Rule => Rule.max(1),
      of: [
        {
          type: 'linkInternal'
        },
        {
          type: 'linkExternal'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items'
    },
    prepare({ title, items }) {
      const image = items.find(item => item._type == 'image')
      return {
        title: title ? `${title} - Page Banner` : 'Page Banner',
        media: image
      }
    }
  }
}
