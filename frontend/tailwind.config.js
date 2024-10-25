/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          300: "#d1d5db",
          400: "#9ca3af",
        },
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
        },
        white: "#ffffff",
        'faded-gray': '#343441',
      },
      fontSize: {
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
