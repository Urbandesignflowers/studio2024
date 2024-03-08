import React from 'react'

export default {
  name: 'productText',
  title: 'Text',
  type: 'array',
  of: [
    {
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        annotations: [
          // Product
          {
            name: 'annotationProduct',
            type: 'annotationProduct'
          },
          // Email
          {
            name: 'annotationLinkEmail',
            type: 'annotationLinkEmail'
          },
          // Internal link
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal'
          },
          // URL
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal'
          }
        ],
        decorators: [
          {
            title: 'Italic',
            value: 'em'
          },
          {
            title: 'Strong',
            value: 'strong'
          }
        ]
      },
      // Regular styles
      styles: [
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'H2',
          value: 'h2'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.75rem', lineHeight: 1.2 }}>{children}</div>
            )
          },
          title: 'H3',
          value: 'h3'
        }
      ],
      // Paragraphs
      type: 'block'
    },
    {
      name: 'blockInfo',
      type: 'module.info'
    }
  ]
}
