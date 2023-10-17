/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    function ({ addBase }) {
      addBase({
        '@layer base': {
          '@import': '"./src/styles/globals.css"',
        },
      });
    },
  ],
};
