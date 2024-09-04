/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
            'radiant-bg': 'linear-gradient(135deg, #a7dbff, #87c2e9, #70abdf, #5396d5, #337cc4)',
            'radiant2-bg': 'linear-gradient(135deg, #5ea6d7, #4d8ec4, #3975ad, #2c5e96, #1f487f)',
      },
      fontFamily: {
        carme: ['Carme', ...defaultTheme.fontFamily.sans],
        baskervville: ['Baskervville SC', ...defaultTheme.fontFamily.serif],
        oswald: ['"Oswald"', 'sans-serif'],
        'dm-serif': ['"DM Serif Text"', 'serif'],
      },
    },
  },
  plugins: [],
};
