const fs = require('fs')

const H = require('partial.lenses.history')

const liftExplicitly = Object.assign(Object.create(null), {
  viewIndex: 0,
  viewPresent: 0
})

const doLift = name => liftExplicitly[name] === 1
const dontLift = name => liftExplicitly[name] === 0

fs.writeFileSync(
  'src/kefir.partial.lenses.history.js',
  `// THIS FILE IS GENERATED

import * as H from 'partial.lenses.history'
import * as K from 'karet.lift'

${Object.entries(H)
    .sort()
    .map(([name, value]) => {
      if (doLift(name) || (typeof value === 'function' && value.length < 4)) {
        return `export const ${name} = K.lift(H.${name})`
      } else if (dontLift(name) || typeof value !== 'function') {
        return `export {${name}} from 'partial.lenses.history'`
      } else {
        throw Error(`Lifting of '${name}' must be specified explicitly.`)
      }
    })
    .join('\n')}
`
)
