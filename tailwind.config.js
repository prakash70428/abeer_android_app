const { colors } = require('./src/theme/colors');
const { fontFamily, fontSize } = require('./src/theme/typography');
const { spacing } = require('./src/theme/spacing');
const { radius } = require('./src/theme/radius');

// Tailwind wants fontSize as [size, { lineHeight }] tuples — our theme file
// keeps them as plain numbers because non-Tailwind code (e.g. SVG charts)
// needs to read a raw pixel value, not a Tailwind-shaped tuple.
const tailwindFontSize = Object.fromEntries(
  Object.entries(fontSize).map(([key, { size, lineHeight }]) => [
    key,
    [`${size}px`, `${lineHeight}px`],
  ]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize: tailwindFontSize,
      spacing,
      borderRadius: radius,
    },
  },
  plugins: [],
};
