import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const reviews = S.listItem()
  .title('Reviews')
  .schemaType('review')
  .child(
    S.documentTypeList('review')
  )
