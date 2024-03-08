export default {
  name: 'textContent',
  type: 'object',
  title: 'Text Content',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'body'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title ? `${title} - Text Content` : 'Text Content'
      }
    }
  }
}
