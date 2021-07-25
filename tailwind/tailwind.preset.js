const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#321411",
        },
        secondary: {
          DEFAULT: "#C4AD8B",
        },
        whatsapp: "#25D366",
        "true-gray": colors.trueGray,
      },
      transitionDuration: {
        450: "450ms",
      },
      fontFamily: {
        monotype: "Monotype Corsiva",
        opensans: "Open Sans",
      },
      gridTemplateColumns: {
        link: "30px 1fr",
        button: "2rem 1fr",
        slider: "75px 1fr 75px",
        shop: "20% 80%",
      },
      gridTemplateRows: {
        product: "60% 40%",
      },
      height: {
        "45vw": "45vw",
        112: "28rem",
        120: "30rem",
      },
      maxHeight: {
        120: "30rem",
      },
      inset: {
        "1/20": "5%",
      },
    },
  },
  variants: {
    extend: {
      transitionDuration: ["hover"],
      borderStyle: ["focus"],
    },
  },
  plugins: [
    require("./plugins/buttons"),
    require("./plugins/baseStyles"),
    require("./plugins/textShadow"),
    require("./plugins/backgrounds"),
    require("./plugins/dividers"),
    require("@caiquecamargo/tailwind-clamp-text"),
    require("@caiquecamargo/tailwind-decorators"),
    require("@tailwindcss/forms"),
  ],
};
