/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // arquivos do React que usarão Tailwind
  ],
  theme: {
    extend: {
      fontSize: {
        // exemplo de font-size responsivo usando clamp
        'clamp-lg': 'clamp(1.5rem, 4vw, 2.5rem)', // tamanho fluido: mínimo 1.5rem, ideal 4vw, máximo 2.5rem
      },
      height: { '125': '31.25rem', '200': '50rem' }
    },
  },
  plugins: [],
}
