import { Bookmarklet } from '../lib/bookmarklet.js'

export const Redact = new Bookmarklet('Redact', (options) => {
  function queryAndExecute(query, callback) {
    document.querySelectorAll(query).forEach(el => {
      el.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()

        callback(event.target)
      })
    })
  }

  queryAndExecute('img', img => {
    img.setAttribute('style', [
      img.getAttribute('style'),
      `filter: blur(${options.radius}) !important`
    ]
      .filter(Boolean)
      .join(';'))
  })

  queryAndExecute('a,abbr,acronym,address,article,aside,b,blockquote,cite,code,dd,del,div,dt,em,i,input,kbd,label,li,mark,p,pre,q,s,samp,small,strike,strong,sub,sup,td,th,tt,u', el => {
    el.innerText = el.innerText
      .trim()
      .replaceAll(/\w/g, options.symbol)
  })
})
  .description('Click on text and images to blur or redact them')
  .tag('productivity')
  .option('radius', '8px')
  .option('symbol', '░')
