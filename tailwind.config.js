module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrart: ["Montserrat", "sans-serif"],
      genos: ['Genos', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      osans: ['Open sans', 'sans-serif'],
      bc: ['Barlow Condensed', 'sans-serif'],
      mw: ['"Merriweather"', 'serif'],
    },
    extend: {
      backgroundImage: {
        'abstract-blue': "url('/src/resources/images/abstract_blue.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
