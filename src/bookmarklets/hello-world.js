import { Bookmarklet } from '../lib/bookmarklet.js'

export const HelloWorld = new Bookmarklet('Hello, World', () => {
  window.alert('Hello, World!')
})
  .description('Alerts "Hello, World"')
  .tag('demo')
