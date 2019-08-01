const initState = {
	startups: [
		// {	
		// 	id: 1,
		// 	name: "BEST",
		// 	team: ["Steve Dole", "Ivory Unga"],
		// 	website: "http://nickwong.io",
		// 	cohort: "Waimea 2019",
		// 	industry: "Education",
		// 	logo: "http://nickwong.io/assets/images/nickCal_compressed.jpg"
		// },
		// {	
		// 	id: 2,
		// 	name: "Eco Crates",
		// 	team: ["Shane Matsushima", "Naia Lum"],
		// 	website: "http://nickwong.io",
		// 	cohort: "Waimea 2019",
		// 	industry: "Environment",
		// 	logo: "http://nickwong.io/assets/images/nickCal_compressed.jpg"
		// }
	]
}

const startupReducer = (state = initState, action) => {
	console.log(action.startups)
	switch (action.type) {
		case "UPDATE_STARTUPS": {
			return {
				...state,
				startups: [...state.startups, action.startups]				
			}
		}
		default: {
			return state
		}
	}
}


export default startupReducer
