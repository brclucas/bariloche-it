/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens: {
        'xs': '0px',
      },

      backgroundColor: {
        'nav': 'rgba(19, 18, 33, 0.5)',
        'wait': 'rgba(166,166,166,0.8)',
      },

      gradientColorStops: {
        'secondary-from': 'rgba(0, 56, 255, 1)',
        'secondary-to': 'rgba(0, 56, 255, 0)',
      },

      animation: {
        'bounce': 'bounce 1s infinite',
        'floatSlider': 'floatSlider 2s ease-in-out infinite',
        'pulse': 'pulse 2s infinite', // Ejemplo de animación con duración de 2 segundos
      },
      keyframes: {
        'bounce': {
          '0%, to': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'floatSlider': {
          '0%, to': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse': {
          '50%': {
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [

    function ({ addVariant, e }) {
      addVariant('xs', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.xs${separator}${className}`;
        });
      });
    },
  ],
}