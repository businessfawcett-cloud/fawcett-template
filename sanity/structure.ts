import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

const BUNDLED_DOC_TYPES = ['sanity.imageAsset', 'sanity.fileAsset']

export const structure: StructureResolver = (S, context) => {
  const documentTypes = context.schema
    .getTypeNames()
    .filter(
      (name) =>
        name !== 'siteSettings' &&
        !BUNDLED_DOC_TYPES.includes(name) &&
        context.schema.get(name)?.type?.name === 'document',
    )

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('siteSettings')
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.divider(),
      ...documentTypes.map((name) => S.documentTypeListItem(name)),
    ])
}
