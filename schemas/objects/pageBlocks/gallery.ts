import { TfiGallery } from 'react-icons/tfi'

export default {
  name: 'gallery',
  type: 'object',
  icon: TfiGallery,
  title: 'Gallery',
  fields: [
    {
      name: 'text',
      type: 'minimal',
      title: 'Text'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
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
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Gallery`
      }
    }
  }
}
