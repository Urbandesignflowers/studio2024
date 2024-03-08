import { TagIcon } from '@sanity/icons'
import pluralize from 'pluralize'
import React from 'react'
import ShopifyIcon from '../../components/icons/Shopify'
import ProductHiddenInput from '../../components/inputs/ProductHidden'
import ShopifyDocumentStatus from '../../components/media/ShopifyDocumentStatus'
import { getPriceRange } from '../../utils/getPriceRange'
import { BsCardText, BsCartPlusFill } from 'react-icons/bs'
import { RxDividerHorizontal } from 'react-icons/rx'
import { SlOptions } from 'react-icons/sl'
import { FaShopify } from 'react-icons/fa'

const GROUPS = [
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
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: GROUPS,
  fields: [
    // Product hidden status
    {
      name: 'hidden',
      type: 'string',
      inputComponent: ProductHiddenInput,
      group: GROUPS.map(group => group.name),
      hidden: ({ parent }) => {
        const isActive = parent?.store?.status === 'active'
        const isDeleted = parent?.store?.isDeleted
        return isActive && !isDeleted
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
      type: 'array',
      title: 'Product Description',
      name: 'productDescription',
      group: 'editorial',
      of: [
        {
          name: 'productTextObject',
          type: 'object',
          icon: BsCardText,
          title: 'Product Text',
          fields: [
            { name: 'title', type: 'string' },
            { type: 'productText', name: 'productText' }
          ],
          preview: {
            select: {
              title: 'title'
            },
            prepare({ title }) {
              return {
                title: title,
                media: BsCardText,
                subtitle: 'Product Text'
              }
            }
          }
        },
        { type: 'reference', to: { type: 'personalisation' } },
        {
          type: 'object',
          name: 'divider',
          title: 'Divider',
          icon: RxDividerHorizontal,
          fields: [
            {
              type: 'string',
              name: 'title',
              initialValue: 'Divider',
              readOnly: true
            }
          ],
          preview: {
            prepare() {
              return {
                title: 'Divider',
                media: RxDividerHorizontal
              }
            }
          }
        },
        {
          type: 'object',
          name: 'options',
          title: 'Options',
          icon: SlOptions,
          fields: [
            {
              type: 'string',
              name: 'title',
              initialValue: 'Options',
              readOnly: true
            }
          ],
          preview: {
            prepare() {
              return {
                title: 'Options',
                media: SlOptions
              }
            }
          }
        },
        {
          type: 'object',
          name: 'addToCart',
          title: 'Add to Cart',
          icon: BsCartPlusFill,
          fields: [
            {
              type: 'string',
              name: 'title',
              initialValue: 'Add to Cart',
              readOnly: true
            }
          ],
          preview: {
            prepare() {
              return {
                title: 'Add to Cart',
                media: BsCartPlusFill
              }
            }
          }
        },
        {
          type: 'object',
          name: 'storefrontDescription',
          icon: FaShopify,
          title: 'Shopify Product Description',
          fields: [
            {
              type: 'string',
              name: 'title',
              initialValue: 'Shopify Description',
              readOnly: true
            }
          ],
          preview: {
            prepare() {
              return {
                title: 'Shopify Product Description',
                media: FaShopify
              }
            }
          }
        },
        { type: 'extras', name: 'extras' },
        { type: 'module.accordion', name: 'accordion' },
        { type: 'reference', to: { type: 'productContent' }, name: 'productContent' }
      ]
    },

    // Shopify product
    {
      name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
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
    },
    {
      name: 'priceDesc',
      title: 'Price (Highest first)',
      by: [{ field: 'store.priceRange.minVariantPrice', direction: 'desc' }]
    },
    {
      name: 'priceAsc',
      title: 'Title (Lowest first)',
      by: [{ field: 'store.priceRange.minVariantPrice', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      optionCount: 'store.options.length',
      previewImageUrl: 'store.previewImageUrl',
      priceRange: 'store.priceRange',
      status: 'store.status',
      title: 'store.title',
      variantCount: 'store.variants.length'
    },
    prepare(selection) {
      const { isDeleted, optionCount, previewImageUrl, priceRange, status, title, variantCount } =
        selection

      let description = [
        variantCount ? pluralize('variant', variantCount, true) : 'No variants',
        optionCount ? pluralize('option', optionCount, true) : 'No options'
      ]

      let subtitle = getPriceRange(priceRange)
      if (status !== 'active') {
        subtitle = '(Unavailable in Shopify)'
      }
      if (isDeleted) {
        subtitle = '(Deleted from Shopify)'
      }

      return {
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
          />
        ),
        description: description.join(' / '),
        subtitle,
        title
      }
    }
  }
}
