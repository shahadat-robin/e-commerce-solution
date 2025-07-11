/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/layout/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/sections/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff5050",
        },
        white: {
          DEFAULT: "#ffffff",
          secondary: "#f8f8f8",
        },
        dark: {
          DEFAULT: "#2d3439",
        },
        gray: {
          DEFAULT: "#999999",
          secondary: "#cccccc",
        },
        danger: {
          DEFAULT: "#FF0000",
          secondary: "#FF7F7F",
        },
      },
    },
  },
  plugins: [],
};
