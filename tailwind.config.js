const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      bgray:colors.blueGray,
      purple:colors.purple,
      green:colors.green,
      indigo:colors.indigo,
      purple:colors.purple,
      orange:colors.orange
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'secondBig': '2.8125rem',
       'phone':'32px',
       'tablet':'40px',
       
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    height: {
      contHeight:'500px',
      container:'300px',
      footerBox:'150px'
     },
     screens: {
       'phone':'250px',
        // => @media (min-width: 250px) { ... }
      'tablet': '600px',
      // => @media (min-width: 600px) { ... }
      'bgtablet': '800px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3.5rem',
     }
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
