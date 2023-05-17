import {createPlugin} from 'sanity'

interface MyPluginConfig {
  /* nothing here yet */
}

/**
 * ## Usage in sanity.config.ts (or .js)
 *
 * ```
 * import {createConfig} from 'sanity'
 * import {myPlugin} from '@21gram-consulting/sanity-schema-org'
 *
 * export const createConfig({
 *     /...
 *     plugins: [
 *         myPlugin()
 *     ]
 * })
 * ```
 */
export const myPlugin = createPlugin<MyPluginConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from @21gram-consulting/sanity-schema-org')
  return {
    name: '@21gram-consulting/sanity-schema-org',
  }
})
