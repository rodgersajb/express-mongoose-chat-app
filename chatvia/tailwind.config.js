/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#7269ef",
        customLightGrey: "#f5f7fb",
        customGrey: "#e6ebf5",
        altGrey: "#7a7a7a",
        altDarkGrey: "#2e2e2e",
        goldYellow: "#FFDF00",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
      },
    },
  },
  plugins: [],
};
