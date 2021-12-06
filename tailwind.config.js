module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#000000',
        objectbackground: '#131E25',
        email: '#EB7085',
        highlight: '#E43F5A',
        secondary: '#5CC178',
        javascript: '#F1E05A',
        html: '#E9907C',
        css: '#B796FF',
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
