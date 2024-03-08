import React from 'react'

export default {
  name: 'body',
  title: 'Body',
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
          {
            name: 'annotationLinkTel',
            type: 'annotationLinkTel'
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
              <div style={{ fontSize: '1.7rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'h1',
          value: 'h1'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'h2',
          value: 'h2'
        }
      ],
      // Paragraphs
      type: 'block'
    },
    // Custom blocks
    {
      name: 'blockAccordion',
      type: 'module.accordion'
    },
    {
      name: 'blockInfo',
      type: 'module.info'
    },
    {
      name: 'blockCallout',
      type: 'module.callout'
    },
    {
      name: 'blockImages',
      type: 'module.images'
    },
    {
      name: 'blockProducts',
      type: 'module.products'
    }
  ]
}
