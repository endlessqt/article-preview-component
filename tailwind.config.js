module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        dark: "var(--dark)",
        lightdark: "var(--lightdark)",
        lightblue: "var(--lightblue)",
        lightdarkblue: "var(--lightdarkblue)",
      },
      variants: {
        fill: ["responsive", "hover", "focus"],
      },
      spacing: {
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        28: "7rem",
      },
      letterSpacing: {
        popup: "0.3rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
