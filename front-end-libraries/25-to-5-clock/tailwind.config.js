/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lp-dark': 'rgb(18, 22, 49)',
        'lp-normal': 'rgb(30, 33, 64)',
        'lp-light': 'rgb(41, 44, 89)',

        'lp-darkisher': 'rgb(33, 28, 90)',
        'lp-darkish': 'rgb(44, 38, 110)',
        'lp-normalish': 'rgb(59, 54, 130)',
        'lp-lightish': 'rgb(116, 115, 184)',


 


        'lp-lightest': 'rgb(220, 222, 245)',
        'lp-orange': 'rgb(191, 86, 45)',
        'lp-orange-dark': 'rgb(161, 72, 38)',
        'lp-purple-light': 'rgb(192, 132, 252)',
        'lp-purple': 'rgb(105, 64, 170)',
        'lp-purple-dark': 'rgb(85, 37, 130)',
        'lp-pink': 'rgb(230, 89, 166)',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-lp': 'linear-gradient(to right, rgb(105, 64, 170), rgb(230, 89, 166))',
      },
    },
  },

  
  plugins: [],

  
}