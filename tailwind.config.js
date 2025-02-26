
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FAFAFA", 
          card: "#FFFFFF", 
          textPrimary: "#1D1D1D", 
          textSecondary: "#555555", 
          primary: "#E63946", 
          secondary: "#F4A261", 
          success: "#2A9D8F", // Teal Green for Confirmation Messages
          warning: "#E76F51", // Soft Red for Alerts
          border: "#E0E0E0", // Light Gray for Dividers
        },
        dark: {
          background: "#121212", // True Black – High Contrast & Modern
          card: "#1E1E1E", // Dark Gray – Smooth UI
          textPrimary: "#FFFFFF", // Pure White – Best Readability
          textSecondary: "#CCCCCC", // Light Gray – Soft Readability
          primary: "#E63946", // Same Rose Red for Brand Consistency
          secondary: "#F4A261", // Same Warm Orange for Consistency
          success: "#2A9D8F", // Same Green for Confirmation Messages
          warning: "#E76F51", // Same Alert Red for Familiarity
          border: "#333333", // Subtle Dividers
        },
      },
    },
  },
  plugins: [],
};
