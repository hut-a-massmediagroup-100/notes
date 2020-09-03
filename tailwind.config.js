/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#E91E63',
          hover: '#9C27B0',
          active: '#f44336',
          disabled: '#F48FB1',
          'gr-from': '#E91E63',
          'gr-via': '#9C27B0',
          'gr-to': '#f44336'
        },
        secondary: {
          default: '#2196F3',
          hover: '#673AB7',
          active: '#3F51B5',
          disabled: '#90CAF9',
          'gr-from': '#2196F3',
          'gr-via': '#673AB7',
          'gr-to': '#3F51B5'
        },
        success: {
          default: '#8BC34A',
          hover: '#4CAF50',
          active: '#CDDC39',
          disabled: '#C5E1A5',
          'gr-from': '#8BC34A',
          'gr-via': '#4CAF50',
          'gr-to': '#CDDC39'
        },
        info: {
          default: '#03A9F4',
          hover: '#00BCD4',
          active: '#2196F3',
          disabled: '#81D4FA',
          'gr-from': '#03A9F4',
          'gr-via': '#00BCD4',
          'gr-to': '#2196F3'
        },
        danger: {
          default: '#FF5722',
          hover: '#f44336',
          active: '#FF9800',
          disabled: '#FFAB91',
          'gr-from': '#FF5722',
          'gr-via': '#f44336',
          'gr-to': '#FF9800'
        },
        warning: {
          default: '#FFC107',
          hover: '#FF9800',
          active: '#FFEB3B',
          disabled: '#FFE082',
          'gr-from': '#FFC107',
          'gr-via': '#FF9800',
          'gr-to': '#FFEB3B'
        },
      }
    }
  },
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
