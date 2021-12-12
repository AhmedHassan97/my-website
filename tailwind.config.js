// tailwind.config.js
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "halloween", // first one will be the default theme
      "light",
      "luxury",
      "corporate",
      "forest",
    ],
    styled: true,
    rtl: false,
  },
};
