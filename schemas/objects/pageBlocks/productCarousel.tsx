import { AiOutlineShopping } from 'react-icons/ai'

export default {
  name: 'productCarousel',
  type: 'object',
  title: 'Product Carousel',
  icon: AiOutlineShopping,
  fields: [
    {
      name: 'collection',
      type: 'reference',
      to: [{ type: 'collection' }],
      title: 'Collection'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'minimal'
    },
    {
      name: 'direction',
      title: 'Direction',
      type: 'string',
      initialValue: 'ltr',
      options: {
        list: [
          { title: 'ltr', value: 'ltr' },
          { title: 'rtl', value: 'rtl' }
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Products Ribbon`
      }
    }
  }
}
