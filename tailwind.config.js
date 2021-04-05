module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
