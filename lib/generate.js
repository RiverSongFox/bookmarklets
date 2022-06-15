import { promises } from 'fs'
import * as bookmarkletModules from '../src/index.js'
import Mustache from 'mustache'

const { readFile, writeFile } = promises

; (async function main () {
  const bookmarklets = []

  for (const [id, bookmarklet] of Object.entries(bookmarkletModules)) {
    bookmarklets.push({
      id,
      ...(await bookmarklet.serialize())
    })
  }

  const template = await readFile('./lib/template.mustache', 'utf8')
  const html = Mustache.render(template, {
    baseUrl: 'https://object-required.github.io/bookmarklets',
    bookmarklets
  }).trim()

  await writeFile('./dist/index.html', html)
}())
