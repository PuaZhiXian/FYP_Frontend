/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      sm: '16px',
      base: '20px',
      md:'32px',
      lg:'58px'
    },
    extend: {
      colors: {
        'danger': '#EA4335',
        'warning': '#F55D53',
        'theme': '#2453EE',
        'primary-900': '#10064D',
        'primary-600':'#CAE5FF',
        'success': '#27C468'
      },
    },
  },
  plugins: [],
}
