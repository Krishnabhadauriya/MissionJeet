/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  animation: {
    bounceSlow: "bounce 2s infinite",
    zoomIn: "zoomIn 1s ease-out forwards",
  },
  keyframes: {
    zoomIn: {
      "0%": { transform: "scale(0.5)", opacity: "0" },
      "100%": { transform: "scale(1)", opacity: "1" },
    },
  },
}
  },
  plugins: [],
}
