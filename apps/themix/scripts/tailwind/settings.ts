/**
 * Represents a color pairing with light and dark shades.
 * @property light - The light shade of the color.
 * @property dark - The dark shade of the color.
 */
export type ColorPairing = {
  light: number;
  dark: number;
};

/**
 * Represents a color with its names, shades, and color pairings.
 * @property names - The names of the color.
 * @property shades - The shades of the color.
 * @property pairings - The color pairings associated with the color.
 */
export type Color = {
  names: string[];
  shades: number[];
  pairings: ColorPairing[];
};

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

/**
 * COLOR object containing color-related constants.
 */
export const COLOR: Color = {
  names: [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'error',
    'surface'
  ],
  shades,
  pairings: [
    // forward:
    { light: 50, dark: 900 },
    { light: 100, dark: 800 },
    { light: 200, dark: 700 },
    { light: 300, dark: 600 },
    { light: 400, dark: 500 },
    // backwards
    { light: 900, dark: 50 },
    { light: 800, dark: 100 },
    { light: 700, dark: 200 },
    { light: 600, dark: 300 },
    { light: 500, dark: 400 }
  ]
}
