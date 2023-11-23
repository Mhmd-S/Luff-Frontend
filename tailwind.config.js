/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				settingsLargeScreen: 'repeat(6, 40%)',
				settingsSmallScreen: 'repeat(6, 25%)',
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				'8bit': ['"Press Start 2P"', 'cursive'],
			},
      colors:{
        'my-orange': '#F76301',
      },
			keyframes: {
				wiggle: {
					'0%': {
						boxShadow: '0px 0px 30px 5px rgba(239, 68, 68)',
						border: '2px solid rgb(239, 68, 68)',
					},
					'25%': {
						boxShadow: '0px 0px 30px 5px rgba(168, 85, 247)',
						border: '2px solid rgb(168, 85, 247)',
					},
					'75%': {
						boxShadow: '0px 0px 30px 5px rgba(34, 197, 94)',
						border: '2px solid rgb(34, 197, 94)',
					},
					'100%': {
						boxShadow: '0px 0px 30px 5px rgba(239, 68, 68)',
						border: '2px solid rgb(239, 68, 68)',
					},
				},
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
			},
		},
	},
	plugins: [],
};
