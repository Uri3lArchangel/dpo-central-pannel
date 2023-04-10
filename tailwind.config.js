/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./source/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `sr c` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {},
  },
  plugins: [],
}