import { COLOR } from '../settings'

const classes = {
  // Font Family
  '.font-heading': { 'font-family': 'var(--theme-font-family-heading)' },
  '.font': { 'font-family': 'var(--theme-font-family-base)' },
  // Default Text Colors
  '.text-base': { color: 'rgba(var(--theme-font-color-base))' },
  '.text-dark': { color: 'rgba(var(--theme-font-color-dark))' },
  // Light/Dark Text Color  - ex: .text
  '.text': { color: 'rgba(var(--theme-font-color-base))' },
  '.dark .text': { color: 'rgba(var(--theme-font-color-dark))' }
};
COLOR.names.forEach((n) => {
  // On-X Text Colors
  // Example: .text-on-primary
  classes[`.text-on-${n}`] = { color: `rgb(var(--on-${n}))` };

  // // Color Pairings
  // // Example: .text-primary-50-900 | .text-primary-900-50
  // settings.colorPairings.forEach((p) => {
  //   classes[`.text-${n}-${p.light}-${p.dark}`] = { color: `rgb(var(--color-${n}-${p.light}))` };
  //   classes[`.dark .text-${n}-${p.light}-${p.dark}`] = { color: `rgb(var(--color-${n}-${p.dark}))` };
  // });
});
