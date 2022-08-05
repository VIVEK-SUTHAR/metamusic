/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow Condensed"],
        Dosis: ["Dosis"], 
        QuickSand: ["Quick Sand"],
        Inter:["Inter"], // ! find out why this fontFamily still not register to the styles.css inside the public -o output folder.
      },
    },
     
  },
  plugins: [],
}
