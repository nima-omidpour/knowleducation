/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["RighteousRegular", "sans-serif"],
      },
      width: {
        400: "400px",
      },
      height: {
        300: "300px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["custom-error"],
    },
  },

  plugins: [
    function ({ addVariant, e }) {
      addVariant("custom-error", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`custom-error${separator}${className}`)}`;
        });
      });
    },
  ],
};
