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
				'.text-shadow': {
					'text-shadow': '1px 1px 3px rgb(36 37 47 / 25%)',
				},
				'.text-shadow-lg': {
					'text-shadow':
						'3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)',
				},
			});
		}),
	],
};
