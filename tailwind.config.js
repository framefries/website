const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    fontFamily: {
      display: ['"Benfritz"', ...defaultTheme.fontFamily.sans],
      sans: ['"Instrument Sans"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000',
      white: '#fff',
      accent: '#ff3c3c',
      cream: '#fff9e9',
      gray: colors.stone,
    },
    extend: {
      minWidth: defaultTheme.spacing,
      maxWidth: defaultTheme.spacing,
      minHeight: defaultTheme.spacing,
      maxHeight: defaultTheme.spacing,
      // adding some values to handle relative z-index between elements
      // keeping 10-based z-index for absolute z-index layers
      zIndex: {
        '-1': -1,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      },
      animationDelay: {
        'none': '0s',
      },
      animation: {
        blink: 'blink 1s steps(5, start) infinite',
      },
      keyframes: {
        blink: { 'to': { visibility: 'hidden' } },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(({ addBase, theme }) => {
      addBase({
        'body': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          'font-size': theme('fontSize.base'),
        },
      });
    }),
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn': {
          'appearance': 'none',
          'flex-shrink': '0',
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'column-gap': theme('spacing.2'),
          'white-space': 'nowrap',
          'font-weight': '200',
          'color': 'inherit',
          'cursor': 'pointer',
        },
        '.btn.variant-neutral': {
          'text-decoration-thickness': '1px',
          'text-underline-offset': '4px',
          '&:hover': {
            'text-decoration': 'underline',
          },
        },
        '.btn.variant-primary,.btn.variant-alt': {
          'height': theme('spacing.10'),
          'padding-left': theme('spacing.6'),
          'padding-right': theme('spacing.6'),
          'border-radius': theme('borderRadius.md'),
          'line-height': theme('lineHeight.6'),
          'font-size': theme('fontSize.base'),
          'font-weight': '500',
        },
        '.btn.variant-primary': {
          'background-color': theme('colors.accent'),
          'color': theme('colors.cream'),
        },
        '.btn.variant-alt': {
          'background-color': theme('colors.cream'),
          'color': theme('colors.accent'),
        },
        '.btn.variant-icon': {
          'width': theme('spacing.10'),
          'padding-left': '0',
          'padding-right': '0',
        },
      });
    }),
  ],
};
