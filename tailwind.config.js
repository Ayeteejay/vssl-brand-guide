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
        bronze: "#9C794F",
        ink: "#000000",
        smoke: "#FFF",
        iron: "#222222",
        faded_iron: "#707070",
      },
      gridTemplateAreas: {
        hero_large: [
          ". . pirates pirates",
          ". . pirates pirates",
          "shaka . pirates pirates",
          "shaka . storm coin",
        ],
        hero_small: [
          "pirates pirates pirates pirates pirates",
          "shaka shaka storm coin coin",
          ". . storm coin coin",
        ],
        voice: ["painting painting dog", "painting painting boat"],
        grit_large: ["fish fish .", ". crust crust", "cliff cliff ."],
        grit_small: ["fish crust", "cliff crust"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
