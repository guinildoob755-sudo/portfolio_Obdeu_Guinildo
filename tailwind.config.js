/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // tailwind.config.js
theme: {
  extend: {
    backgroundImage: {
      'grid': "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)"
    },
    backgroundSize: {
      'grid': '20px 20px'
    }
  }
},
  plugins: [],
}

