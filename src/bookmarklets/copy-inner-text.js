import { Bookmarklet } from '../lib/bookmarklet.js'

export const OpenTicket = new Bookmarklet('Copy Inner Text', (options) => {
  const copyInnerText = e => {
    navigator.clipboard.writeText(e.target.innerText)
  }

  document
    .querySelectorAll(options.selector)
    .forEach(el => {
      el.addEventListener('click', copyInnerText)
    })
})
  .description('Add copy on click to all elements matching the selector')
  .tag('productivity')
  .option('selector', 'span')
