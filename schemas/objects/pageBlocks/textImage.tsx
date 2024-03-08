export default {
  name: 'textImage',
  type: 'object',
  title: 'Text Image',
  fields: [
    {
      name: 'items',
      type: 'array',
      validation: Rule => Rule.max(2),
      title: 'Image & Text',
      of: [
        {
          name: 'textObject',
          type: 'object',
          title: 'Text',
          fields: [{ type: 'body', title: 'Text', name: 'text' }],
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
    }
  ],
  preview: {
    select: {
      items: 'items'
    },
    prepare({ items }) {
      const image = items?.find(item => item._type == 'image')
      return {
        title: `Text Image`,
        media: image ? image : null
      }
    }
  }
}
