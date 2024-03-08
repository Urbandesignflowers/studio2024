import { MdOutlineRateReview } from 'react-icons/md'

export default {
  name: 'reviews',
  type: 'object',
  title: 'Reviews',
  icon: MdOutlineRateReview,
  fields: [
    {
      name: 'text',
      type: 'minimal',
      title: 'Text'
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'review' }]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Reviews`
      }
    }
  }
}
