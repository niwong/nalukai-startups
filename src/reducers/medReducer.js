const initState = {
	medications: [
		{id:"1", name: "Vicodin", days: ['M', 'W', 'F'], time:"9AM", active:true},
		{id:"2", name: "Simvastatin", days: ['M', 'W', 'F'], time:"9AM", active:false},
		{id:"3", name: "Synthroid", days: ['Tu', 'Th'], time:"9AM", active:false},
		{id:"4", name: "Crestor", days: ['M', 'Th', 'F'], time:"9AM", active:false}
	]
}

const medReducer = (state = initState, action) => {
	switch (action.type) {
		case "ACTIVATE_MED": {

			let updated = state.medications.map(medication => {
				if (medication.id === action.id) {
					medication.active = !medication.active
					return medication
				} else {
					return medication
				}

			})

			return {
				...state,
				medications: updated
			}
		}
		case "DELETE_MED": {

			let medications = state.medications.filter(medication => {
				return medication.id !== action.id
			})
			return {
				...state,
				medications: medications
			}
			
		}
		default: {
			return state
		}
	}
}


export default medReducer