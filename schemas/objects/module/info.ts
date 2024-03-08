import { InfoOutlineIcon } from '@sanity/icons'

export default {
  name: 'module.info',
  title: 'Info',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    // Text
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4
    },
    {
      name: 'svg',
      type: 'image',
      title: 'SVG',
      validation: Rule =>
        Rule.error().custom(image => {
          if (image.asset._ref.slice(-3) != 'svg') {
            return "Please upload SVG's only."
          } else {
            return true
          }
        })
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(selection) {
      const { text } = selection
      return {
        subtitle: 'Info',
        title: text
      }
    }
  }
}
