/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}", "./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				quick: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
};
