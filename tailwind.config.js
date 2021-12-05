module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#191A19',
        objectbackground: '#1C2C35',
        email: '#E43F5A',
        secondary: '#5CC178',
        javascript: '#F1E05A',
        html: '#E34C26',
        css: '#B796FF',
        font: '#CFEDFF',
        header: '#ECF8FF',
        border: '#7CC9FF'
      },
      fontFamily: {
        'jost': ['jost']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
