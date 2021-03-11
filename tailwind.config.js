module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mgb-blue": {
          light: "#00a1bd",
          DEFAULT: "#009db8",
          dark: "#009db8"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
