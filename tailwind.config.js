/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			screens: {
				extra: '2000px'
			},
			colors: {
				primaryorange: '#FF830F',
				gray: {
					100: '#9CA3AF', //secondary text
					200: '#2C3036', //light gray
					300: '#1B1B1B', //dark gray		
				}
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'selector'
};
