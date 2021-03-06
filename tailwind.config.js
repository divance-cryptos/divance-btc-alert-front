module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Rampart: ["Nunito", "cursive"],
        'bangers': ['"Bangers"', 'cursive'],
        'mansalva': ['"Mansalva"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
