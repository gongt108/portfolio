const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar': {
					// For modern browsers
					'scrollbar-width': 'none', // For Firefox
					'-ms-overflow-style': 'none', // For Internet Explorer and Edge
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none', // For Chrome, Safari, and Opera
				},
			});
		}),
	],
};
