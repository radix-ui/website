const { blackA, violet, mauve } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.jsx"],
	theme: {
		extend: {
			colors: {
				...blackA,
				...violet,
				...mauve,
			},
		},
	},
	plugins: [],
};
