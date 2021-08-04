module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBackground: "#0F1113",
        lightBackground: "#FFF",
        darkHeader: "#0F1113",
        lightHeader: "#FCFCFC80",
        textSecondary: "#8E8E93",
        textPrimaryDark: "#f5f5f7",
        textPrimary: "#1d1d1f",
        primary: "#007AFE",
        darkButtonPrimaryHover: "#5957E5",
        darkButtonSecondary: "#1C1C1E",
        buttonSecondary: "#F2F2F7",
        borderDark: "rgba(163,163,163,0.1)",
        dividerDark: "#2C2C2E",
        divider: "#E5E5EA",
        borderLight: "rgba(229,229,229,1)",
        borderDarkHover: "#3A3A3C",
        borderLightHover: "#D1D1D6",

      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        headerBorderBottom: "inset 0 -1px 0 0 #ffffff1a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
