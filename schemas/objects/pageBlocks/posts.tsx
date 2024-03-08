import { HiOutlineDocumentText } from 'react-icons/hi'
import { PAGE_REFERENCES } from '../../../constants'

export default {
  name: 'posts',
  type: 'object',
  icon: HiOutlineDocumentText,
  title: 'Posts',
  fields: [
    {
      name: 'showAll',
      type: 'boolean',
      title: 'Show all?',
      initialValue: false
    },
    {
      name: 'type',
      type: 'array',
      title: 'Type',
      of: [{ type: 'string' }],
      validation: Rule =>
        Rule.custom((type, context) => {
          if (context.parent.showAll && typeof type === 'undefined') {
            return 'Please select a single post type.'
          } else if (context.parent.showAll && (type.length > 1 || type.length == 0)) {
            return 'Please select a single post type.'
          } else return true
        }),
      options: {
        list: [{ title: 'Blog', value: 'blog' }]
      },
      hidden: ({ parent }) => {
        return !parent.showAll
      }
    },

    {
      name: 'text',
      type: 'minimal',
      title: 'Text'
    },

    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      hidden: ({ parent }) => {
        return parent.showAll
      },
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }]
        },
        {
          type: 'object',
          name: 'card',
          title: 'Card',
          fields: [
            { type: 'string', name: 'title' },
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
            },
            {
              name: 'reference',
              title: 'Link',
              type: 'reference',
              weak: true,
              validation: Rule => Rule.required(),
              to: PAGE_REFERENCES
            },
            { title: 'Text', name: 'text', type: 'minimal' }
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Posts`
      }
    }
  }
}
