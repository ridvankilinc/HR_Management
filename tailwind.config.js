/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },

    fontSize: {
      sm: ['0.875rem', '1rem'],
      base: ['1rem', '1.15rem'],
      lg: ['1.125rem', '1.625rem'],
      xl: ['1.25rem', '1.75rem'],
      xxl: ['2.5rem', '3rem'],
    },

    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      colors: {},
      backgroundImage: {
        desktop:
          "url('../../public/assets/img/auth/desktop-login.svg')",
        mobile: "url('../../public/assets/img/auth/mobile-bg.svg')",
      },

      backgroundColor: {
        base: '#252525',
        gray: {
          10: '#ABABAB',
          20: '#4D4D4D',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.tap-highlight-color': {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        },
      });
    }),
  ],
};
