import { TbSection } from 'react-icons/tb'

export default {
  name: 'contentBanner',
  type: 'object',
  title: 'Content Banner',
  icon: TbSection,
  fields: [
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      validation: Rule => Rule.max(3),
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Text',
          fields: [
            { type: 'minimal', title: 'Text', name: 'text' },
            {
              type: 'image',
              name: 'image',
              title: 'Image',
              options: {
                hotspot: true
              }
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
            prepare() {
              return {
                title: 'Card'
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Content Banner'
      }
    }
  }
}
