/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        "purple": "#c1a4f6",
        "dark-purple": "#6b5F93"
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif"
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}

