/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        MainColor:"#203A82",
        primary: '#FF0000',
        backgroundColor:"#F9F8FF",
        textColor:"#000A2C",
        textSecondary: "#000A28",
        borderColor:"background: rgba(32, 38, 44, 0.24);",
        Seconday:"#20262C",
        backgroundSky: "#9BC3F6",
        pricingcard:"#EBF1F4"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
