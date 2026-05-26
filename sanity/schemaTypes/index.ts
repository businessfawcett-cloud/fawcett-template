import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { page } from './page'
import { service } from './service'
import { navItem } from './navItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, page, service, navItem],
}
