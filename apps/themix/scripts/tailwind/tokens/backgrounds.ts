// Design Tokens: Background
// Doc: https://www.skeleton.dev/docs/tokens

// const settings = require('../settings.cjs');
import { COLOR, type ColorPairing } from '../settings'

type Classes = {
  [key: string]: {
    [key: string]: string
  }
}

/**
 * Returns a CSS property for 'background-color' with the corresponding color and opacity.
 *
 * @param name - The name of the color.
 * @param shade - The shade of the color.
 * @param [backdropAlpha] - Optional backdrop alpha value for the color. Default is undefined.
 * @returns \{'background-color': \`rgb(var(--color-${name}-${shade}) ${backdropAlpha ? '/ ' + backdropAlpha : ''})\`\}
 */
const backgroundColor = (name: string, shade: number, backdropAlpha?: number) => {
  return {
    'background-color': `rgb(var(--color-${name}-${shade})${backdropAlpha ? ' / ' + backdropAlpha : 1})`
  }
}

// Defaults
const backdropAlpha = 0.7;
const hoverAlpha = 0.1;

/**
 * @returns an object containing CSS classes for background colors with various shades, opacities, and hover/active effects.
*/
export default (() => {
  const classes: Classes = {};
  COLOR.names.forEach((name) => {
    // Backdrops
    // Example: .bg-primary-backdrop-token
    classes[`.bg-${name}-backdrop-token`] = backgroundColor(name, 400, backdropAlpha)
    //   {
    //   'background-color': `rgb(var(--color-${n}-400) / ${backdropAlpha})`
    // };
    classes[`.dark .bg-${name}-backdrop-token`] = backgroundColor(name, 900, backdropAlpha)
    //   {
    //   'background-color': `rgb(var(--color-${n}-900) / ${backdropAlpha})`
    // };

    // Hover
    // Example: .bg-primary-hover-token
    classes[`.bg-${name}-hover-token:hover`] = backgroundColor(name, 500, hoverAlpha)
    //   {
    //   'background-color': `rgb(var(--color-${n}-500) / ${hoverAlpha})`
    // };

    // Active
    // Example: .bg-primary-active-token
    classes[`.bg-${name}-active-token`] = {
      'background-color': `rgb(var(--color-${name}-500)) !important`,
      color: `rgb(var(--on-${name}))`,
      fill: `rgb(var(--on-${name}))`
    };

    // Color Pairings
    // Example: .bg-primary-50-900-token | .bg-primary-900-50-token
    COLOR.pairings.forEach((pair: ColorPairing) => {
      classes[`.bg-${name}-${pair.light}-${pair.dark}-token`] = {
        'background-color': `rgb(var(--color-${name}-${pair.light}))`
      };
      classes[`.dark .bg-${name}-${pair.light}-${pair.dark}-token`] = {
        'background-color': `rgb(var(--color-${name}-${pair.dark}))`
      };
    });
  });
  return classes;
})();
