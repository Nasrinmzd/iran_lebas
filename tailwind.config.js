/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      iransans: ["Iransans", "sans-serif"],
    },

    extend: {
      colors: {
        maincolorred: "#C1121F",
        primary: "#1C1C1C",
        secondary: " #313132",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    
  ],
};
