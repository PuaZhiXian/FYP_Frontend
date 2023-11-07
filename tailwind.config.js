/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      base: '20px',
      md: '32px',
      lg: '58px',
      'table-row': '16px',
      'table-header': '18px',
      'xs': '12px',
      'sm': '16px',
      'button': '16px',
      'input': '16px',
      'label': '16px',
      'title': '38px',
      'subtitle': '18px',
      'header': '20px',
      'side-header': '14px',
      'side-sub': '12px',
      'doc-title': '24px',
      'doc-text': '14px'
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
