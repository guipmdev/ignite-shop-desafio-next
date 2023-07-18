import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      // Grayscale
      'grayscale-white': '#ffffff',
      'grayscale-title': '#e1e1e6',
      'grayscale-text': '#c4c4cc',
      'grayscale-icon': '#8d8d99',
      'grayscale-elements': '#202024',
      'grayscale-background': '#121214',
      'grayscale-black': '#000000',

      // Brand
      'brand-principal': '#00875f',
      'brand-light': '#00b37e',

      // Color
      'color-green': '#1ea483',
      'color-purple': '#7465d4',
      'color-red': '#cc575f',
      'color-red-light': '#ff575f',
    },

    fontSizes: {
      'font-size-xs': '0.75rem',
      'font-size-sm': '0.875rem',
      'font-size-base': '1rem',
      'font-size-lg': '1.125rem',
      'font-size-xl': '1.25rem',
      'font-size-2xl': '1.5rem',
      'font-size-3xl': '1.875rem',
      'font-size-4xl': '2rem',
      'font-size-5xl': '2.25rem',
    },
  },
})
