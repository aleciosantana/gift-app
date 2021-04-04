/** @type {import('@vue/cli-service').ProjectOptions} */
const options = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: process.env.VUE_APP_TITLE || 'Gift'
    }
  }
}

module.exports = options
