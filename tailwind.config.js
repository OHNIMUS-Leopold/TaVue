/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noirs et blancs
        noir1E: "#1E1E1E",
        noir11: "#111111",
        noir: "#000000",
        blanc: "#FFFFFF",
        blancF5: "#F5F5F5",
        grisAA: "#AAAAAA",
        gris88: "#888888",
        grisEB: "#EBEBEB",
        gris66: "#666666",

        /* Couleurs */
        darkblue: "#42558E",
      },

      // Typos
      fontFamily: {
        josefin: "Josefin Sans, sans-serif",
        nunito: "Nunito, sans-serif",
      },

      // Ombres
      boxShadow: {
        'drop2': '0 10px 48px rgba(30, 28, 46, 0.08)',
        'drop-shadow' : '0px 24px 48px rgba(30, 28, 46, 0.08)',
      }
    },
  },
  plugins: [],
};