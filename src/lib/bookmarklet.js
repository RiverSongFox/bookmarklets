export class Bookmarklet {
  meta = {
    title: '',
    description: '',
    tags: [],
    options: []
  }

  fn = () => {}

  /**
   * Define a new bookmarklet
   *
   * @param {string} title bookmarklet name
   * @param {Function} fn source code of the bookmarklet
   */
  constructor (title, fn) {
    this.meta.title = title
    this.fn = fn
  }

  /**
   * Set extended description of the bookmarklet
   *
   * @param {string} description text
   * @returns Bookmarklet
   */
  description (description) {
    this.meta.description = description

    return this
  }

  /**
   * Add an option variable. It will be passed to the bookmarklet function
   * as a part of dictionary in the first argument
   *
   * @param {string} name variable name
   * @param {string} value a string value
   * @returns
   */
  option (name, value) {
    this.meta.options.push({
      name,
      value
    })

    return this
  }

  /**
   * Add a tag to classify the bookmarklet
   *
   * @param {string} tag tag name
   * @returns Bookmarklet
   */
  tag (tag) {
    this.meta.tags.push(tag)

    return this
  }

  /**
   * Returns bookmarklet data for the page generator
   *
   * @returns Object
   */
  serialize () {
    const source = this.fn.toString()

    return {
      ...this.meta,
      source
    }
  }
}
