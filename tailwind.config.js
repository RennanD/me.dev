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
        500: '#Purple',
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
      sans: ['var(--font-fira-code)', 'sans-serif'],
    },

    extend: {
      backgroundImage: {
        card: `linear-gradient(180deg, #202024 0%, rgba(32, 32, 36, 0.2) 100%)`,
        shadow: `linear-gradient(210.76deg, rgba(18, 18, 20, 0.3) 62.11%, rgba(50, 50, 56, 0.3) 100%)`,
        border: `linear-gradient(180deg, rgba(50,50,56,1) 0%, rgba(50,50,56,0.3) 100%)`,
        divider: `radial-gradient(50.01% 103536054.54% at 50% 48.73%, rgba(80, 80, 89, 0.5) 0%, rgba(80, 80, 89, 0) 100%)`,
        'divider-icon': `linear-gradient(180deg, #464649 0%, rgba(50, 50, 56, 0.3) 100%)`,
        'border-shadow': `linear-gradient(227.16deg, rgba(18, 18, 20, 0) 58.97%, rgba(80, 80, 89, 0.5) 100%)`,
      },
      boxShadow: {
        base: `0px 2px 32px -1px rgba(0, 0, 0, 0.32)`,
      },
      animation: {
        'slide-t-b': 'slide-t-b 300ms ease-in',
      },
      keyframes: {
        'slide-t-b': {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-radix')()],
};
