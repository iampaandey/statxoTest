/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      // Make sure "responsive" is included
      fontSize: ['responsive'],
    },
  },
}
