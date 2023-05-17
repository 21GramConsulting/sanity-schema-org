# @21gram-consulting/sanity-schema-org

## Installation

```
npm install --save @21gram-consulting/sanity-schema-org
```

or

```
yarn add @21gram-consulting/sanity-schema-org
```

## Usage
Add it as a plugin in sanity.config.ts (or .js):

```
 import {createConfig} from 'sanity'
 import {myPlugin} from '@21gram-consulting/sanity-schema-org'

 export const createConfig({
     /...
     plugins: [
         myPlugin({})
     ]
 })
```
## License

MIT © 21Gram Consulting
See LICENSE