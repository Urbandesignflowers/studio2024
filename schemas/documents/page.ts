import { DocumentIcon } from '@sanity/icons'
import { validateSlug } from '../../utils/validateSlug'
import { BLOCKS } from '../../constants'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'theme',
      title: 'Theme'
    },
    {
      default: true,
      name: 'editorial',
      title: 'Editorial'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // Slug
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: validateSlug
    },
    // Color theme
    {
      name: 'colorTheme',
      title: 'Color theme',
      type: 'reference',
      to: [{ type: 'colorTheme' }],
      group: 'theme'
    },
    //Blocks
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      validation: Rule => Rule.min(1).error('The page has no content.'),
      group: 'editorial',
      of: BLOCKS
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo'
    }
  ],
  preview: {
    select: {
      active: 'active',
      seoImage: 'seo.image',
      title: 'title'
    },
    prepare(selection) {
      const { seoImage, title } = selection

      return {
        media: seoImage,
        title
      }
    }
  }
}
