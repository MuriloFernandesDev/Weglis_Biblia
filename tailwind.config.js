/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  //   darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ligth: {
        //   primary: 'rgba(var(--color-primary), <alpha-value>)',
        //   background: 'rgba(var(--color-background), <alpha-value>)',
        // },
        // dark: {
        //   primary: 'rgba(var(--color-primary), <alpha-value>)',
        //   background: 'rgba(var(--color-background), <alpha-value>)',
        // },
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: '#fff',
          'primary-content': '#000',
          'base-200': '#192132',
          'base-content': '#e4e1ef',
        },
        dark: {
          primary: '#0f172a',
          'primary-content': '#fff',
          'base-200': '#192132',
          'base-content': '#0f172a',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
