module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'gray': {
        '10': '#3a3a3a',
        '20': '#222',
        '40': '#666',
        '50':'#383838',
        '100': '#02080f',
        '200': '#1c1b1bcc',
        '300': '#00000066',
        '400': '#353535',
        '500': '#000000b3',
        '600': '#2d2d2d',
        '700': '#1a1a1a',
        '800': '#333333',
        '900': '#181818',
      },
      'red': {
        '100': '#A3765D',
        '200': '#c58560',
        '300': '#da966e',
        '400': '#96674f',
        '500': '#c9302c',
        '600': '#d9534f'
      }
    }),
    textColor: theme => ({
      ...theme('colors'),
      'red': {
        '100': '#A3765D',
        '200': '#c58560',
        '300': '#da966e',
        '400': '#96674f',
        '500': '#ff9658',
        '600': '#ff6901'
      },
      'gray': {
        '10': '#ccc',
        '50': '#dcdcdc',
        '60': '#bbb',
        '100': '#000',
        '150':'#b6b6b6',
        '200': '#666666',
        '300': '#BABABA',
        '400': '#ccc',
        '500': '#848484',
      }
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'red': {
        '100': '#A3765D',
        '200': '#c58560',
        '300': '#da966e',
        '400': '#96674f',
        '500': '#907863',
        '600': '#d43f3a',
        '700': '#e8a568',
        '800': '#ff6901'
      },
      'black': {
        '10': '#4c4c4c'
      },
      'yellow': {
        '10': '#B8B612'
      }
     }),
    width: {
      '0': '0px !important',
      '50': '50px !important',
      '1/2': '50% !important',
      '1/3': '33.333333% !important',
      '1/5': '20% !important',
      '2/5': '40% !important',
      '3/5': '60% !important',
      '1/4': '25% !important',
      'full': '100% !important',
      'auto': 'auto !important',
      '4/6': '66.666667% !important',
      '2/6': '33.333333% !important',
      '9/12': '75% !important',
      '3/12': '25% !important',
      '5/12': '41.666667% !important',
      '7/12': '58.333333% !important',
      '16': '4.5rem',
      '800': '800px !important',
      '260': '260px !important',
      '240': '240px !important',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
