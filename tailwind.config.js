const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      height: {
        current: '1em',
      },
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
      animation: {
        'blink': 'blink 1s steps(5, start) infinite',
        'fade-in': 'fade-in .5s ease-in-out both',
        'fade-down': 'fade-down .5s ease-in-out both',
        'fade-up': 'fade-up .5s ease-in-out both',
      },
      keyframes: {
        'blink': { 'to': { 'visibility': 'hidden' } },
        'fade-in': {
          '0%': { 'opacity': 0 },
          '100%': { 'opacity': 100 },
        },
        'fade-down': {
          '0%': { 'opacity': 0, 'transform': 'translateY(-1rem)' },
          '100%': { 'opacity': 100, 'transform': 'none' },
        },
        'fade-up': {
          '0%': { 'opacity': 0, 'transform': 'translateY(1rem)' },
          '100%': { 'opacity': 100, 'transform': 'none' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),

    // body reset
    plugin(({ addBase, theme }) => {
      addBase({
        'body': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          'font-size': theme('fontSize.base'),
          'color': theme('colors.gray.900'),
        },
      });
    }),

    // hide scrollbar
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-none': {
          'scrollbarWidth': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        },
      })
    }),

    // animation delay
    plugin(({ addUtilities, matchUtilities, theme }) => {
      matchUtilities({
        'after': (value) => ({
          'animation-delay': value,
        }),
      }, {
        values: theme('transitionDelay'),
      });
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        },
        '.play': {
          'animation-play-state': 'running',
        },
      });
    }),

    // buttons
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

          '&.variant-neutral': {
            'text-decoration-thickness': '1px',
            'text-underline-offset': '4px',
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                'text-decoration': 'underline',
              },
            }
          },

          '&.variant-primary, &.variant-alt': {
            'height': theme('spacing.10'),
            'padding-left': theme('spacing.6'),
            'padding-right': theme('spacing.6'),
            'border-radius': theme('borderRadius.md'),
            'line-height': theme('lineHeight.6'),
            'font-size': theme('fontSize.base'),
            'font-weight': '500',
          },

          '&.variant-primary': {
            'background-color': theme('colors.accent'),
            'color': theme('colors.cream'),
          },

          '&.variant-alt': {
            'background-color': theme('colors.cream'),
            'color': theme('colors.accent'),
          },

          '&.variant-icon': {
            'width': theme('spacing.10'),
            'padding-left': '0',
            'padding-right': '0',
          },
        },
      });
    }),

    // checkbox
    plugin(({ addComponents, theme }) => {
      addComponents({
        'input[type="checkbox"]': {
          'appearance': 'none',
          'position': 'relative',
          'display': 'grid',
          'place-content': 'center',
          'width': 'fit-content',
          'height': 'fit-content',
          'margin': '0',
          'border': 'none',
          'outline': 'none',
          'background': 'transparent',
          'color': 'transparent',
          'cursor': 'pointer',
          
          '&::before': {
            'content': '""',
            'width': '1em',
            'height': '1em',
            'border-radius': '.25em',
            'border': '1px solid rgba(0,0,0,.1)',
            'background-color': theme('colors.cream'),
          },

          '&::after': {
            'content': '""',
            'position': 'absolute',
            'left': '0',
            'right': '0',
            'width': '100%',
            'height': '100%',
            'background-color': theme('colors.accent'),
            'mask-image': `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' fill='none'%3E%3Cpath d='M6 11.43 10.36 16 18 8'/%3E%3C/svg%3E")`,
            'mask-repeat': 'no-repeat',
            'mask-position': 'center',
            'mask-size': '1em',
            'opacity': '0.1',
            'transition': 'opacity .15s ease-in-out',
          },

          '&:checked::after': {
            'opacity': '1',
          },

          '&.variant-alt::before': {
            'background-color': theme('colors.accent'),
          },
          '&.variant-alt::after': {
            'background-color': theme('colors.cream'),
          },
        },
      });
    }),
  ],
};
