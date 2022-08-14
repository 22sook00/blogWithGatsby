module.exports = {
	important: true,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/**/*.{ts,tsx}",
		"./src/pages/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 5s ease infinite',
      },
			colors: {
		
				"primary-through": "rgba(255, 217, 81, 0.3)",
				"text-primary": "#0284c7",
				"text-dark": "#333333",
				"text-light": "#9ca3af",
				"text-tint": "#d1d1d1",
				"text-line": "#dddddd",
				"text-tag-blue": "#2586F9",
				"text-tag-red": "#F8979b",
				"text-tag-yellow": "#FFD951",
				"error-primary": "#E74346",
				"error-dark": "#b82a2d",
				"error-light": "#e4797e",
				"error-tint": "#FFC7C9",
				"warning-primary": "#F7A74D",
				"warning-dark": "#FFD951",
				"warning-light": "#FACB90",
				"matching-primary": "#49BD58",
				"matching-dark": "#009024",
				"matching-light": "#C2F1C7",
				"hover-gray-bg": "rgba(209, 209, 209, 0.2)",
				"bottom-shadow": "rgba(0, 0, 0, 0.05)",
				"item-favorite": "#FF5050",
				"modal-bg": "rgba(0, 0, 0, 0.67)",
				"map-bg": "rgba(255, 255, 255, 0.8)",
				"item-hover": "#EEEEEE",
				"uni-bg": "#629EE4",
				"station-bg": "#76C781",
			},
			fontFamily: {
				Roboto: ["Roboto", "serif"],
				RobotoThin: ["Roboto Regular"],
				RobotoBold: ["Roboto Bold"],
				rubik: ["Rubik"],
				rubikBold: ["Rubik Bold"],
				NotoSansKR: ["Noto Sans KR", "sans-serif"],
			},
			screens: {
				desktop: "1120px",
			},
			gridTemplateColumns: {
				"listpage-desktop": "269px minmax(1fr, 835px)",
			},
		},
	},
	plugins: [
	],
};
