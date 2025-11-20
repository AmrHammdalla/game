// hero.ts
import { heroui } from "@heroui/react";
// or import from theme package if you are using individual packages.
// import { heroui } from "@heroui/theme";
export default heroui({
  defaultTheme: "light",
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#E23626",
          50: "#fef3f2",
          100: "#ffe4e1",
          200: "#ffcdc8",
          300: "#ffaaa2",
          400: "#fc796d",
          500: "#f44e3f",
          600: "#e23626",
          700: "#be2517",
          800: "#9d2217",
          900: "#82231a",
        },
        secondary: {
          DEFAULT: "#414141",
          50: "#FFFFFF",
          100: "#E4E4E4",
          200: "#DFDFDF",
          300: "#D9D9D9",
          400: "#B2B2B2",
          500: "#414141",
          600: "#6E7485",
          700: "#363636",
          800: "#373737",
          900: "#202020",
        },
        warning: {
          DEFAULT: "#B29165",
          100: "#F7F4EF",
          200: "#EBE4D6",
          300: "#D8CAB0",
          400: "#C2A982",
          500: "#B29165",
          600: "#A07B52",
          700: "#896445",
          800: "#6F4D39",
          900: "#5E4235",
        },
        success: {
          DEFAULT: "#3a9818",
          50: "#f0fce9",
          100: "#def8cf",
          200: "#b9f19d",
          300: "#95e76f",
          400: "#70d942",
          500: "#50be24",
          600: "#3a9818",
          700: "#2e7417",
          800: "#285c18",
          900: "#254e19",
        },
        background: "#000000",
        foreground: "#FFFFFF",
      },
    },
  },
});
