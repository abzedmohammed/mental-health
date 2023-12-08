/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			// fontFamily: {
			// 	dmSans: ['DM Sans'],
			// 	outfit: ['Outfit']
			// },
		},
		colors: {
			mainBg: '#EDF8FF',
		},
		screens: {
			xs: '360px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
