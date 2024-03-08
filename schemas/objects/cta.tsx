import React from 'react'

import styled from 'styled-components'

const Cta = styled.div`
  width: fit-content;
  padding: 10px 20px;
  font-size: 16px;
`

const Preview = ({ value }) => {
  if (!value?.link) {
    return <div></div>
  }
  return <Cta>{value?.link[0]?.title ? value.link[0].title : ''}</Cta>
}

export default {
  name: 'cta',
  type: 'object',
  title: 'Call to action',
  fields: [
    {
      name: 'links',
      title: 'Link',
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
    }
  ],
  preview: {
    select: {
      link: 'linkArray'
    },
    component: Preview
  }
}
