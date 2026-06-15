const { blackA, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.jsx"],
	theme: {
		extend: {
			colors: {
				...blackA,
				...violet,
			},
		},
	},
	plugins: [],
};
