/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#CAD2C5',
				't-primary': '#2F3E46',
				't-secondary': '#354F52',
			},
		},
	},
	plugins: [],
}
