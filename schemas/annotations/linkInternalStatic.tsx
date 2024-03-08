/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import { LinkIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'Internal Link Static',
  name: 'annotationLinkInternalStatic',
  type: 'object',
  blockEditor: {
    icon: () => <LinkIcon />,
    render: ({ children }) => (
      <span>
        <LinkIcon
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
    {
      name: 'href',
      type: 'string'
    }
  ]
}
