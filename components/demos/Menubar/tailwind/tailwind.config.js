const { blackA, mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.jsx"],
	theme: {
		extend: {
			colors: {
				...blackA,
				...mauve,
				...violet,
			},
		},
	},
	plugins: [],
};
