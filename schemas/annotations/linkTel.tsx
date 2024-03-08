/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'

export default {
  title: 'Tel link',
  name: 'annotationLinkTel',
  type: 'object',
  blockEditor: {
    icon: () => <AiOutlinePhone />,
    render: ({ children }) => (
      <span>
        <AiOutlinePhone
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em'
          }}
        />
        {children}
      </span>
    )
  },
  fields: [
    // Tel
    {
      title: 'Tel',
      name: 'tel',
      type: 'string'
    }
  ]
}
