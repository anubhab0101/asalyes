/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        md: {
          background: '#FFFBFE',
          onBackground: '#1C1B1F',
          primary: '#6750A4',
          onPrimary: '#FFFFFF',
          secondaryContainer: '#E8DEF8',
          onSecondaryContainer: '#1D192B',
          tertiary: '#7D5260',
          surfaceContainer: '#F3EDF7',
          surfaceContainerLow: '#E7E0EC',
          outline: '#79747E',
          onSurfaceVariant: '#49454F',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            strokeDashoffset: "20%",
            strokeDasharray: "0 50%",
            fill: "transparent",
          },
          "20%": {
            fill: "transparent",
            stroke: "#6750A4",
            strokeWidth: "2",
          },
          "80%": {
            fill: "transparent",
            stroke: "#6750A4",
            strokeWidth: "2",
          },
          "100%": {
            strokeDashoffset: "-20%",
            strokeDasharray: "50% 0",
            fill: "#6750A4",
            strokeWidth: "0",
          },
        },
      },
    },
  },
  plugins: [],
}
