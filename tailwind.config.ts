import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        macchiato: {
          base: '#24273a',
          mantle: '#1e2030',
          crust: '#181926',
          text: '#cad3f5',
          overlay0: '#6e738d',
          surface0: '#363a4f',
          blue: '#8aadf4',
          red: '#ed8796',
          'red-dark': '#b2555b',
        },
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss'),
  ],
};
export default config;