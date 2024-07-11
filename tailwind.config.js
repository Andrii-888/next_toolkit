/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fly-to-corner": {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "100%": {
            transform: "translate(-50vw, -50vh) scale(0.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        "fly-to-corner": "fly-to-corner 1s forwards",
      },
    },
  },
  plugins: [],
};
