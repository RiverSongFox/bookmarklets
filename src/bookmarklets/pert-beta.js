import { Bookmarklet } from '../lib/bookmarklet.js'

export const PertBeta = new Bookmarklet('PERT β', (options) => {
  const [o, r, p] = window.prompt(options.prompt, '')
    .trim()
    .split(/[^\d]+/)
    .map(s => parseInt(s, 10))

  const dec = 10 ** parseInt(options.precision, 10)
  const beta = Math.round(dec * ((p + 4 * r + o) / 6)) / dec

  window.alert(`PERT β = ${beta}`)
})
  .description('Calculates β average for Pessimistic, Realistic, and Optimistic estimations')
  .option('prompt', 'Optimistic, Realistic, Pessimistic?')
  .option('precision', 1)
