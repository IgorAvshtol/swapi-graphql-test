module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards': 'repeat(auto-fill,minmax(590px,auto))',
      },
      fontFamily: {
        'shadow': ['Shadows']
      }
    },
  },
  plugins: [],
};
