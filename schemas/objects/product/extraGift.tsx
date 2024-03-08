import { AiOutlineGift } from 'react-icons/ai'
export default {
  name: 'extras',
  title: 'Extra Gifts Carousel',
  icon: AiOutlineGift,
  type: 'object',
  fields: [
    { type: 'boolean', name: 'showRelated', title: 'Show Related?' },
    {
      type: 'array',
      name: 'products',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: Rule => Rule.max(12)
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Extra Gifts Carousel'
      }
    }
  }
}
