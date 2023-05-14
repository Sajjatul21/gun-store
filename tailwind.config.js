/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a6b7ed",

          "secondary": "#84edcc",

          "accent": "#14913e",

          "neutral": "#27232F",

          "base-100": "#E3E6E8",

          "info": "#6883CF",

          "success": "#1AD587",

          "warning": "#F29A3A",

          "error": "#EA7B9C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}

