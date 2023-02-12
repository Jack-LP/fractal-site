/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#131313',
        bone: '#f1f1f2',
        sky: '#027aef',
        myGray: '#808085',
      },
      fontFamily: {
        centra: ['centra', 'monospace'],
      },
    },
  },
  plugins: [],
};
