export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    // let tailwindcss/nesting handle it for you instead
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    // autoprefixer: {},
  },
};
