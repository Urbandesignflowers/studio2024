import { MdOutlineContentCopy } from 'react-icons/md'

export default {
  name: 'productContent',
  type: 'document',
  title: 'Product Content',
  icon: MdOutlineContentCopy,
  fields: [
    { type: 'string', name: 'title' },
    { type: 'productDescription', name: 'productDescription' }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        subtitle: title ? 'Product Content' : ''
      }
    }
  }
}
