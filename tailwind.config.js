/** @type {import('tailwindcss').Config} */
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
      accent: {
        '50': '#fff1f1',
        '100': '#ffdfdf',
        '200': '#ffc5c5',
        '300': '#ff9d9d',
        '400': '#ff6464',
        '500': '#ff3c3c',
        '600': '#ed1515',
        '700': '#c80d0d',
        '800': '#a50f0f',
        '900': '#881414',
        '950': '#4b0404',
      },
      cream: {
        '50': '#fff9e9',
        '100': '#feefc7',
        '200': '#fdde8a',
        '300': '#fcc64d',
        '400': '#fbaf24',
        '500': '#f58d0b',
        '600': '#d96806',
        '700': '#b44709',
        '800': '#92360e',
        '900': '#782d0f',
        '950': '#451503',
      },
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
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn': {
          'appearance': 'none',
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'column-gap': theme('spacing[1.5]'),
          'height': theme('spacing.10'),
          'padding-left': theme('spacing.6'),
          'padding-right': theme('spacing.6'),
          'border-radius': theme('borderRadius.md'),
          'background-color': theme('colors.white'),
          'line-height': theme('lineHeight.6'),
          'font-size': theme('fontSize.base'),
          'font-weight': '500',
          'color': theme('colors.gray.700'),
          '&:hover': {
            'background-color': theme('colors.gray.100'),
          }
        },
        '.btn.variant-primary': {
          'background-color': theme('colors.accent.500'),
          'color': theme('colors.cream.50'),
          '-webkit-font-smoothing': 'antialiased',
          '&:hover': {
            'background-color': theme('colors.accent.600'),
          }
        },
        '.btn.variant-alt': {
          'background-color': theme('colors.cream.50'),
          'color': theme('colors.accent.500'),
          '&:hover': {
            'background-color': theme('colors.cream.100'),
          }
        },
      });
    }),
  ],
};
