import React from 'react'

export default {
  name: 'minimal',
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
          {
            name: 'annotationLinkTel',
            type: 'annotationLinkTel'
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
        { title: 'Normal', value: 'normal' },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '2rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'H1',
          value: 'h1'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'H2',
          value: 'h2'
        },
        { title: 'H3', value: 'h3' }
      ],
      // Paragraphs
      type: 'block'
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
  ]
}
