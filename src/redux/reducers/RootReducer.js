import { combineReducers } from "redux";
import newMenuInfo from './MenuInfoReducer'
import cambiarCampana from './SubsBellReducer'

const RootReducer = combineReducers({
  newMenuInfo,
  cambiarCampana
})

export default RootReducer

