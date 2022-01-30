const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"'].concat(defaultTheme.fontFamily.sans),
      },
      keyframes: {
        // BOTTOM-CENTER TOAST ANIMATIONS
        // 'slide-up': {
        //   '0%': {
        //     transform: 'translateY(calc(100% + var(--padding, 0px)))',
        //     opacity: 0,
        //   },
        //   '100%': { transform: 'translateY(0)', opacity: 1 },
        // },
        // 'slide-down': {
        //   '0%': { transform: 'translateY(0)', opacity: 1 },
        //   '100%': {
        //     transform: 'translateY(calc(100% + var(--padding, 0px)))',
        //     opacity: 0,
        //   },
        // },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(calc(100% + var(--padding, 0px)))',
          },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(100% + var(--padding, 0px)))',
          },
        },
        'shrink-x': {
          '100%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        // 'slide-up': 'slide-up 0.3s ease-in-out both',
        // 'slide-down': 'slide-down 0.3s ease-in-out both',
        'slide-in-right': 'slide-in-right 0.3s ease-in-out both',
        'slide-out-right': 'slide-out-right  0.3s ease-in-out both',
        'shrink-x': 'shrink-x 5s 0.3s ease-in-out both',
      },
    },
  },
  plugins: [],
};
