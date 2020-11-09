module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {},
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },
  plugins: [require("@tailwindcss/ui")],
};
