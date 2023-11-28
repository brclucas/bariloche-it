/** @type {import('tailwindcss').Config} */


export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    margin: {
      '5%': '5%',
      '10%': '10%',
      '25%': '25%',
    },
    spacing: {
      '15': '3.5rem', // Equivalente a 40px
      '25': '7rem', 

    },
    bottom: {
      '15': '3.5rem', // Equivalente a 40px
    },

    textColor: {
      'lightblue': '#2CBCF5',
    },

    screens: {
      'xs': '0px',
      'cel': '769px'
    },

    backgroundColor: {
      'nav': 'rgba(19, 18, 33, 0.5)',
      'wait': 'rgba(166,166,166,0.8)',
      'red': 'rgba(255,17,0,0.8)',
      'yellow': 'rgba(229,226,57,0.8)',
      'lightblue': '(44, 188, 245,1)',
      'lightblue-700': '(44, 188, 245,1)',



    },

    gradientColorStops: {
      'secondary-from': 'rgba(0, 56, 255, 1)',
      'secondary-to': 'rgba(0, 56, 255, 0)',
    },

    animation: {
      'bounce': 'bounce 1s infinite',
      'floatSlider': 'floatSlider 2s ease-in-out infinite',
      'pulse': 'pulse 1s infinite', // Ejemplo de animación con duración de 2 segundos
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
};
export const plugins = [
  require('flowbite/plugin'),
  function ({ addVariant, e }) {
    addVariant('xs', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.xs${separator}${className}`;
      });
    });
  },
];