module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "darker-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "light-gray": "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        "big-shoulder": ["Big Shoulders Display", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
