import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        favorite: "var(--favorite)",
        newtag: "var(--new-tag)",
        label: "var(--label)",
        unavailable: "var(--unavailable)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        yantramanav: "var(--font-yantramanav)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
export default config;
