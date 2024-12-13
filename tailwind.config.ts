import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px"
        }
      },
      colors: {
        primary:"#181A2A",
        secondary:"#4B6BFB",
        background:"##1B1E34",
        gray:"#97989F",
        section:"#242535",
        category:"#1B1E34",
        footer:"#141624"
      },
    },
    fontFamily:{
      main:["Work Sans","sans-serif"],
      blog: ["Source Sans 4", "sans"]
    }
  },
  plugins: [],
} satisfies Config;
