/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
      extend: {
        spacing: {
            '13': '3.25rem'
        },
        fontFamily: {
            poppins: ['Poppins']
        },
      colors: {
        clifford: '#da373d',
        abyan : '#f7f7f7',
        sidamar : '#h4d33h'
      }
    }
  },
  plugins: [],
}
