import { Bookmarklet } from '../lib/bookmarklet.js'

export const MorseKeyboard = new Bookmarklet('Morse Keyboard', () => {
  const tiles = [...document.querySelectorAll('.morse.tile')]
    .reduce((map, tile) => {
      map[tile.innerText.toLowerCase()] = tile
      return map
    }, {})

  window.addEventListener('keypress', (e) => {
    tiles[e.key]?.click()
  })
})
  .description(
    'Use keyboard instead of mouse for playing ' +
    'Morse code sounds on https://morsecode.world/international/morse.html'
  )
  .tag('productivity')
