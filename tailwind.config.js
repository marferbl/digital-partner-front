/** @type {import('tailwindcss').Config} */

export const DARK_COLORS = {
  digiwhite: '#F4F4F4',
  primary: '#0b0927',
  secondary: '#de54f9',
  brand: '#fffb21',
  gridyellow: '#ffff29',
  neongreen: '#ebff27',
  neutral: '#898989',
  lightgray: '#a8a8ac',
  darkgray: '#383838',
  black: '#000000',
  pinkpulse: '#ff29e1',
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '3xs': '0.5rem',
        xxs: '0.625rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem',
        '7xl': '4.768rem',
        '8xl': '5.96rem',
        '9xl': '7.451rem',
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      colors: {
        ...DARK_COLORS,
        // etc.
      },
      width: {
        100: '28rem',
        110: '32rem',
        120: '36rem',
        150: '42rem',
        160: '48rem',
        170: '52rem',
      },
      borderWidth: {
        '1': '1px', // This will create a `border-1` utility
      },
      fontFamily: {
        sans: ['Roobert', 'sans-serif'], // Set Roobert as the primary font for sans
      },
      fontWeight: {
        regular: 300, // Normal weight to align with 'Regular'
        light: 100,   // Light weight
        medium: 500,  // Medium weight
        semibold: 600, // Semi-bold weight
        bold: 700     // Bold weight
      },
      height: {
        100: '28rem',
        110: '32rem',
        120: '36rem',
      }
    },
  },
  plugins: [],
}
