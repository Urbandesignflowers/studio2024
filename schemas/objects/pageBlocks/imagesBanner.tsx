import { BsImages } from 'react-icons/bs'

export default {
  name: 'imagesBanner',
  type: 'object',
  title: 'Images Banner',
  icon: BsImages,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'text',
      type: 'minimal',
      title: 'Title'
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
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
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
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title ? `${title} - Images Banner` : 'Images Banner'
      }
    }
  }
}
