import { HomeIcon } from '@sanity/icons'
import { BLOCKS } from '../../constants'

const TITLE = 'Home'

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial'
    },
    {
      name: 'theme',
      title: 'Theme'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
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
      type: 'seo.home',
      group: 'seo'
    }
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Index',
        title: TITLE
      }
    }
  }
}
