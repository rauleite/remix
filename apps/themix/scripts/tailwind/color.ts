// Extends Tailwind with Themix theme-specific colors values
// Doc: https://tailwindcss.com/docs/customizing-colors#using-css-variables

import { COLOR } from "./settings";

type Shade = {
  [key: string]: string
}

type Pallete = {
  [key: string]: Shade
}

// ex: `50: 'rgb(var(--color-primary-50) / <alpha-value>)'`
function generatePaletteShades(colorName: string) {
  const shadeObj: Shade = {};
  // COLOR.shades.forEach((shade) => (shadeObj[shade] = `rgb(var(--color-${colorName}-${shade}) / <alpha-value>)`));
  COLOR.shades.forEach((shade) => (shadeObj[shade] = `rgb(var(--color-${colorName}-${shade}))`));
  // COLOR.shades.forEach((shade) => (shadeObj[shade] = withOpacity(colorName, shade)));
  return shadeObj;
}

// Generate a color shade palette 50-900 per each color available
export default (() => {
  const paletteObj: Pallete = {};
  COLOR.names.forEach((n) => (paletteObj[n] = generatePaletteShades(n)));
  return paletteObj;
})();
