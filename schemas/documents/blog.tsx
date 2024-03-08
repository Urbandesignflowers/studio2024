import { DocumentIcon } from '@sanity/icons'
import { validateSlug } from '../../utils/validateSlug'

export default {
  name: 'blog',
  title: 'Blog',
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
    {
      name: 'image',
      type: 'image',
      title: 'Blog Image',
      group: 'editorial',
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
    { title: 'Summary Text', group: 'editorial', name: 'text', type: 'minimal' },
    { title: 'Published at', name: 'publishedAt', type: 'date' },
    {
      type: 'pageHeader',
      name: 'pageHeader',
      title: 'Blog Header',
      group: 'editorial'
    },
    { type: 'body', name: 'body', group: 'editorial' },
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
