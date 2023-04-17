import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
  ],
};
export default config
