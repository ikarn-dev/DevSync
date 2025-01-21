module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // This will include all JSX, JS files inside the src folder
  ],
  theme: {
    extend: {
      animation: {
        scrollCards: 'scrollCards 30s linear infinite', // custom animation name and duration
      },
      keyframes: {
        scrollCards: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // Moves the cards to the left
        },
      },
    },
  },
  plugins: [],
}
