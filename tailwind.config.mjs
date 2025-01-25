/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      rubik: "Rubik, serif",
      changa: "Changa One, serif",
      doner: "doner",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#fffff",
        blue: "#2A598A",
        darkBlue: "#1E3F61",
        orange: "#A5783D",
      },
    },
  },
  plugins: [],
};
