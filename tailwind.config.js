/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { fontFamily: { sans: ['Inter','sans-serif'], heading: ['Poppins','Noto Sans Myanmar','sans-serif'], myanmar: ['Noto Sans Myanmar','sans-serif'] } } },
  plugins: [],
};
