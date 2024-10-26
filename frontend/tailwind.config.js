/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)", // Custom shadow from Figma
      },
      colors: {
        primary: "#6994D6",
        secondary: "#74748C",
        "button-hover": "#4D75D8",
        gray: {
          300: "#D0D0E4",
          400: "#87879E",
          500: "#515162",
        },
        black: "#18181E",
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
        },
        white: "#ffffff",
        "faded-gray": "#343441",
      },
      fontSize: {
        paragraph: ["1rem", "150%"], // For paragraph text
        'input-paragraph': ["1rem", "100%"], // For paragraph text
        "button-paragraph": [".875rem", "100%"], // For paragraph text
        "sub-paragraph": ["0.875rem", "150%"], // For paragraph text
        header: ["1.25rem", "auto"], // For header
        small: ["0.75rem", "150%"], // For small text
        xs: ["0.75rem", "1rem"], // For Edit/Remove links
        sm: ["0.875rem", "1.25rem"], // For transcript text and buttons
        base: ["1rem", "1.5rem"], // For subtitles
        lg: ["1.125rem", "1.75rem"], // For larger subtitles
        xl: ["1.25rem", "1.75rem"], // For section titles
        "2xl": ["1.5rem", "2rem"], // For main titles
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
