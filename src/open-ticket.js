import { Bookmarklet } from '../lib/bookmarklet.js'

export const OpenTicket = new Bookmarklet('Open Ticket', (options) => {
  const id = window.prompt(options.prompt, '').trim()

  if (parseInt(id) > 0) {
    window.open(options.urlPrefix + id, '_blank')
  }
})
  .description('Prompts for a ticket number and opens it in a new tab')
  .tag('productivity')
  .option('prompt', 'Ticket No?')
  .option('urlPrefix', 'https://github.com/object-required/bookmarklets/issues/')
