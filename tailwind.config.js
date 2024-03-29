/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }
    },
  },
  plugins: [],
}

