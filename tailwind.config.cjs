module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "brand-white": "#F5F5F5",
        "brand-orange": "#F4A261",
        "brand-blue": "#38809F",
        "brand-light-blue": "#83D0C7",
        "brand-green-1": "#6EC977",
      },
      // spacing: {
      //   '128': '32rem',
      // },
      // maxWidth: {
      //   '7xl': '80rem',
      // },
      // fontSize: {
      //   '7xl': '5rem',
      // },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}