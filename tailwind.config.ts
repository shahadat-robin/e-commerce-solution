/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
    },
  },
  plugins: [],
};
