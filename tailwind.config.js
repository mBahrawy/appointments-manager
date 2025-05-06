/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{html,ts,tsx,jsx}', // Include all app files
   ],
   safelist: [
    {
      pattern: /(bg|text)-(red|green|orange|yellow)-(100|200|300|400|500|600|700|800|900)/, // For dynamic status colors
    },
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
};
