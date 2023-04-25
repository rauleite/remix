import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import themeColors from './scripts/tailwind/color'
import type { PluginAPI } from 'tailwindcss/types/config'
import backgrounds from './scripts/tailwind/tokens/backgrounds'
import { inspect } from 'util'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

console.log('themeColors', themeColors)

const utilities = ({ addUtilities, matchUtilities, theme }: PluginAPI) => {
  addUtilities({
    // '.bg-primary-backdrop-token': { 'background-color': `rgb(var(--color-primary-400) / ${0.5})` },
    // ...backgrounds,
  })
  matchUtilities(
    {
      'bg': (value) => {
        console.log('value', inspect(value, { depth: 0 }))
        return {
          'background-color': `${value}`
          // 'background-color': `${typeof value === 'function' ? value : value}`
          // 'bg-token': function(value) {
          // console.log('value', value)
        }
      },
    },
    {
      values: flattenColorPalette(theme('colors')),
      type: ['color', 'any'],
      // values: flattenColorPalette(themeColors),
      // values: themeColors,
      // values: theme('colors'),
      // type: ['color']
      // type: 'color'
    },
  )
  // matchUtilities({
  //   // 'background-color': `rgb(var(--color-${name}-${shade})${backdropAlpha ? ' / ' + backdropAlpha : ''})`
  //   'bg-token': (value) => {
  //     console.log('value', inspect(value, { depth: 0 }))
  //     return { 'background-color': `rgb(var(--color-${value}))` }
  //     // return { 'background-color': value }
  //   }
  // },
  //   { values: theme('colors'), type: 'color' }
  //   // { values: themeColors }
  // )

}
const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      // { primary: { 50: 'rgb(var(--color-primary-50) / <alpha-value>)', ... }, ... }
      colors: themeColors,
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
          test: "var(--theme-font-family-base)"
        },
      },
      backgroundColor: {
        skin: {
          fill: "rgb(var(--color-fill))",
          fillb: "rgb(var(--color-fill-black))",
          button: "var(--color-button-base)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(utilities)
  ],
};
export default config
// export default plugin(config)
//
// plugin(({ addComponents }) => {
//   // The following will generate the non-token classes PURELY for Intellisense.
//   // These are excluded from production, which means we still need to lean into
//   // using the `all.css` stylesheet to import non-token styles.
//   if (process.env.NODE_ENV !== 'production') {
//     // try/catch because it will throw when allComponents.cjs isn't generated yet
//     try {
//       const all = require('./generated/intellisense-classes.cjs');
//       addComponents(all, {
//         respectImportant: true,
//         respectPrefix: true
//       });
//     } catch (e) {
//       console.error('Erro:', e)
//     }
//   }
// }),
// ...
