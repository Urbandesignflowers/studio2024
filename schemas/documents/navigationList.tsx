import { DocumentIcon } from '@sanity/icons'
import { validateSlug } from '../../utils/validateSlug'

export default {
  name: 'navigationList',
  title: 'Navigation List',
  type: 'document',

  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          name: 'linkInternal',
          type: 'linkInternal'
        }
      ]
    }
  ]
}
