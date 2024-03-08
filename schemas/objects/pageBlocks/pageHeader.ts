import { RiLayoutRowFill } from 'react-icons/ri'

export default {
  name: 'pageHeader',
  type: 'object',
  title: 'Page Header',
  icon: RiLayoutRowFill,
  fields: [
    {
      type: 'body',
      name: 'text',
      title: 'Text'
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'array',
      validation: Rule => Rule.max(1),
      of: [
        {
          type: 'linkInternal'
        },
        {
          type: 'linkExternal'
        }
      ]
    },
    {
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' }
        ],
        layout: 'radio'
      }
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      text: 'text',
      image: 'image'
    },
    prepare({ text, image }) {
      const heading = (text || []).filter(block => block._type === 'block' && block.style === 'h1')
      return {
        title: heading.length ? heading[0].children[0].text : 'Page Header',
        media: image ? image : null,
        subtitle: heading.length ? 'Page Header' : ''
      }
    }
  }
}
