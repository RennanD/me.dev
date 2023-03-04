/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      omni: {
        background: '#191622',
        'current-line': '#44475a',
        selection: '#41414D',
        foreground: '#E1E1E6',
        comment: '#483C67',
      },
      cyan: {
        500: '#78D1E1',
      },
      green: {
        500: '#67E480',
      },
      orange: {
        500: '#E89E64',
      },
      pink: {
        500: '#FF79C6',
      },
      purple: {
        500: '#988BC7',
      },
      red: {
        500: '#E96379',
      },
      yellow: {
        500: '#E7DE79',
      },
      gray: {
        100: '#E1E1E6',
        150: '#C4C4CC',
        200: '#A9A9B2',
        300: '#737380',
        400: '#7C7C8A',
        500: '#505059',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
        950: '#09090A',
      },
    },
    fontFamily: {
      sans: ['var(--font-fira)', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
