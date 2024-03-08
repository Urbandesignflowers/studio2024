import { BsCardText, BsCartPlusFill } from 'react-icons/bs'
import { FaShopify } from 'react-icons/fa'
import { RxDividerHorizontal } from 'react-icons/rx'
import { SlOptions } from 'react-icons/sl'

export default {
  type: 'array',
  title: 'Product Description',
  name: 'productDescription',
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
    { type: 'extras', name: 'extras' },
    { type: 'module.accordion', name: 'accordion' },
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
    }
  ]
}
