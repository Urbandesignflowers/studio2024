import { MdOutlineRateReview } from 'react-icons/md'

export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  icon: MdOutlineRateReview,
  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'minimal'
    }
  ]
}
