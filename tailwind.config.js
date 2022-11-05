/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      yellow: {
        500:'#f7dd43',
      },

      colors: {
    ignite: {
      500:'#129E57'
    },
      gray: {
        100: '#E1E1E6',
        600: '#323238',
        800: '#202024',
        900:'#121214'

      }
    }
    },
  },
  plugins: [],
}
