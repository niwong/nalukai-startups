import { combineReducers } from 'redux'
import startupReducer from './startupReducer'


// import theDefaultReducer, {
//   firstNamedReducer,
//   secondNamedReducer
// } from './reducers'

// // Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
	startups: startupReducer
})

// import SignInStatusReducer from './reducer-signin-status'
// import ScheduleReducer from './reducer-schedule'
// import MatchesReducer from './reducer-matches'
// import activeUserReducer from './reducer-active-user'
// import updateScheduleReducer from './reducer-update-schedule-status'

export default rootReducer