import { BsCalendarDate, BsPersonFillGear } from 'react-icons/bs'
import { RxText } from 'react-icons/rx'
import { BiImages, BiMessageAltDetail } from 'react-icons/bi'
import { HiSelector } from 'react-icons/hi'

export default {
  name: 'personalisation',
  type: 'document',
  title: 'Personalisation Input',
  icon: BsPersonFillGear,
  fields: [
    {
      name: 'input',
      type: 'array',
      title: 'Input',
      validation: Rule => Rule.min(1).max(1).required().error(),
      of: [
        {
          type: 'object',
          title: 'Text Field',
          name: 'textField',
          fields: [{ name: 'title', type: 'string' }],
          preview: {
            select: {
              title: 'title'
            },
            prepare({ title }) {
              return {
                title: title ? title : '',
                media: RxText,
                subtitle: title ? 'Text Input' : ''
              }
            }
          }
        },
        {
          type: 'object',
          title: 'Message Field',
          name: 'message',
          fields: [{ name: 'title', type: 'string' }],
          preview: {
            select: {
              title: 'title'
            },
            prepare({ title }) {
              return {
                title: title ? title : '',
                media: BiMessageAltDetail,
                subtitle: title ? 'Message Input' : ''
              }
            }
          }
        },
        {
          type: 'object',
          title: 'Delivery Date Field',
          name: 'deliveryDate',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            {
              type: 'boolean',
              title: 'Same day delivery?',
              name: 'sameDay'
            }
          ],
          preview: {
            select: {
              title: 'title',
              sameDay: 'sameDay'
            },
            prepare({ title, sameDay }) {
              return {
                title: title ? title : '',
                media: BsCalendarDate,
                subtitle: title ? `Delivery Date ${sameDay ? '- Same Day' : ''}` : ''
              }
            }
          }
        },
        {
          name: 'imageSelect',
          title: 'Select Option with Image',
          type: 'object',
          fields: [
            // Title
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Option',
                  fields: [
                    {
                      name: 'value',
                      type: 'string',
                      title: 'Value'
                    },
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Image',
                      options: { hotspot: 'true' }
                    }
                  ]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title'
            },
            prepare({ title }) {
              return {
                title: title ? title : '',
                media: BiImages,
                subtitle: title ? 'Image Select' : ''
              }
            }
          }
        },
        {
          name: 'listSelect',
          title: 'List Select',
          type: 'object',
          fields: [
            // Title
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Option',
                  fields: [
                    {
                      name: 'value',
                      type: 'string',
                      title: 'Value'
                    }
                  ]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title'
            },
            prepare({ title }) {
              return {
                title: title ? title : '',
                media: BiImages,
                subtitle: title ? 'List Select' : ''
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      input: 'input'
    },
    prepare({ input }) {
      if (!input) {
        return { title: 'Please add an input type' }
      }
      if (input[0]?._type == 'textField') {
        const title = input[0]?.title
        return {
          title: title ? title : '',
          media: RxText,
          subtitle: title ? 'Text Input' : ''
        }
      } else if (input[0]?._type == 'message') {
        const title = input[0]?.title
        return {
          title: title ? title : '',
          media: BiMessageAltDetail,
          subtitle: title ? 'Message Input' : ''
        }
      } else if (input[0]?._type == 'listSelect') {
        const title = input[0]?.title
        return {
          title: title ? title : '',
          media: HiSelector,
          subtitle: title ? 'List Select' : ''
        }
      } else if (input[0]?._type == 'deliveryDate') {
        const title = input[0]?.title
        const sameDay = input[0]?.sameDay
        return {
          title: title ? title : '',
          media: BsCalendarDate,
          subtitle: title ? `Delivery Date ${sameDay ? '- Same Day' : ''}` : ''
        }
      } else if (input[0]?._type == 'imageSelect') {
        const title = input[0]?.title
        return {
          title: title ? title : '',
          media: BiImages,
          subtitle: title ? 'Image Select' : ''
        }
      } else return { title: 'Please add an input type' }
    }
  }
}
