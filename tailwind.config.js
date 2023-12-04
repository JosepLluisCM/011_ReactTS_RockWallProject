/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ebf4f3",
        background: "#0a1413",
        primary: {
          50: "#f4f9f8",
          100: "#daede9",
          DEFAULT: "#a0cfc7",
          300: "#89bfb8",
          400: "#60a19b",
          500: "#468680",
          600: "#366b67",
          700: "#2e5755",
          800: "#284746",
          900: "#253c3c",
          950: "#112222",
        },
        secondary: {
          50: "#f6f7f9",
          100: "#ebeef3",
          200: "#d3d9e4",
          300: "#acb9cd",
          400: "#7f94b1",
          500: "#5f7698",
          600: "#4a5e7f",
          DEFAULT: "#394760",
          800: "#354157",
          900: "#30394a",
          950: "#202531",
        },

        accent: {
          50: "#effefb",
          100: "#c7fff4",
          200: "#8fffe9",
          300: "#4ff9dd",
          400: "#1ce5ca",
          DEFAULT: "#03ceb6",
          600: "#00a293",
          700: "#048176",
          800: "#09665f",
          900: "#0d544e",
          950: "#003332",
        },
      },
    },
  },
  plugins: [],
};
