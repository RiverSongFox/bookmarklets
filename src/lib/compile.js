import { minify } from 'terser'

function cleanup (options) {
  return options
    .filter(option => !option.name.startsWith('__'))
    .reduce((acc, { name, value }) => ({
      ...acc,
      [name]: value
    }), {})
}

export default async function compile (source, options) {
  const terserResult = (await minify(source, {
    compress: {
      expression: true
    }
  }))

  const minified = terserResult.code.replace(/;$/, '')
  const binding = JSON.stringify(cleanup(options))

  return `javascript:(${minified}).call(null,${binding})`
}
