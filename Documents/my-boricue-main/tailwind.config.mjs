/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#FFFFFF',
        texto: '#000000',
        uno: '#E3F2D8',
        dos: '#20c997',
        divisiones: '#b0b435',
      },
    },
  },
  plugins: [],
};
