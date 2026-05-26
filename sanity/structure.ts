import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('siteSettingsSingleton')
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('navItem').title('Navigation Items'),
    ])
