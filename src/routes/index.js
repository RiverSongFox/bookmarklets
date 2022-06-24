import * as modules from '../bookmarklets/index.js'

export function get () {
  return {
    body: {
      bookmarklets: Object
        .entries(modules)
        .map(([id, bookmarklet]) => ({ id, ...bookmarklet.serialize() }))
    }
  }
}
