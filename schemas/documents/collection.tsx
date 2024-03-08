import { PackageIcon } from '@sanity/icons'
import pluralize from 'pluralize'
import React from 'react'
import ShopifyIcon from '../../components/icons/Shopify'
import CollectionHiddenInput from '../../components/inputs/CollectionHidden'
import ShopifyDocumentStatus from '../../components/media/ShopifyDocumentStatus'
import { BLOCKS } from '../../constants'

const GROUPS = [
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
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShopifyIcon
  },
  {
    name: 'seo',
    title: 'SEO'
  }
]

export default {
  // Required to hide 'create new' button in desk structure
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: PackageIcon,
  groups: GROUPS,
  fields: [
    // Product hidden status
    {
      name: 'hidden',
      type: 'string',
      inputComponent: CollectionHiddenInput,
      group: GROUPS.map(group => group.name),
      hidden: ({ parent }) => {
        const isDeleted = parent?.store?.isDeleted
        return !isDeleted
      }
    },
    // Title (proxy)
    {
      name: 'titleProxy',
      title: 'Title',
      type: 'proxyString',
      options: { field: 'store.title' }
    },
    // Slug (proxy)
    {
      name: 'slugProxy',
      title: 'Slug',
      type: 'proxyString',
      options: { field: 'store.slug.current' }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Collection Image',
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
    // Color theme
    {
      name: 'colorTheme',
      title: 'Color theme',
      type: 'reference',
      to: [{ type: 'colorTheme' }],
      group: 'theme'
    },
    // Collection Text
    {
      name: 'text',
      title: 'Collection Text',
      type: 'minimal',
      group: 'editorial'
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      group: 'editorial',
      description: 'Extra content blocks to display below products.',
      of: BLOCKS
    },
    {
      name: 'navigationList',
      title: 'Collection Page Navigation List',
      type: 'reference',
      group: 'editorial',
      to: [
        {
          type: 'navigationList'
        }
      ]
    },
    // Shopify collection
    {
      name: 'store',
      title: 'Shopify',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync'
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.shopify',
      group: 'seo'
    }
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{ field: 'store.title', direction: 'asc' }]
    },
    {
      name: 'titleDesc',
      title: 'Title (Z-A)',
      by: [{ field: 'store.title', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      imageUrl: 'store.imageUrl',
      isDeleted: 'store.isDeleted',
      ruleCount: 'store.rules.length',
      title: 'store.title'
    },
    prepare(selection) {
      const { imageUrl, isDeleted, ruleCount, title } = selection
      return {
        media: <ShopifyDocumentStatus isDeleted={isDeleted} type="collection" url={imageUrl} />,
        subtitle: ruleCount > 0 ? `Automated (${pluralize('rule', ruleCount, true)})` : 'Manual',
        title
      }
    }
  }
}
