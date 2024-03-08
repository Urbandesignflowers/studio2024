import { BsCollection } from 'react-icons/bs'

export default {
  name: 'collectionsBanner',
  type: 'object',
  title: 'Collections Banner',
  icon: BsCollection,
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'items',
      type: 'array',
      validation: Rule => Rule.max(4),
      title: 'Collections',
      of: [
        {
          type: 'object',
          title: 'Collection',
          name: 'item',
          fields: [
            {
              name: 'collection',
              type: 'reference',
              to: [{ type: 'collection' }]
            },
            {
              title: 'Text',
              type: 'minimal',
              name: 'text'
            }
          ],
          preview: {
            select: {
              title: 'collection.store.title'
            },
            prepare({ title }) {
              return {
                title: title ? title : 'Collection'
              }
            }
          }
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
        title: title ? `${title} - Collections Banner` : `Collections Banner`
      }
    }
  }
}
