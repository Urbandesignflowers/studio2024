import S from '@sanity/desk-tool/structure-builder'
import { DocumentsIcon } from '@sanity/icons'

// prettier-ignore
export const blogs = S.listItem()
  .title('Blog Posts')
  .icon(DocumentsIcon)
  .schemaType('blog')
  .child(
    S.documentTypeList('blog')
  )
