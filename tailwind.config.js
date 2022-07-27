/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#333333",
        white: "#FDFDFD",
        "gray-custom": "#5C5C5C",
      },
    },
  },
  plugins: [],
};
