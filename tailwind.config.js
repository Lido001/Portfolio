// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
//   theme: {
//     extend: {
//       fontFamily: {
//         nura: ["Nura", "sans-serif"], // Register the font
//       },
//     },
//   },
//   plugins: [],
// };



const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Include all your source files
  theme: {
    extend: {
      fontFamily: {
        nura: ["Nura", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

  
