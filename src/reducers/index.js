import { combineReducers } from 'redux';
import StationsReducer from "./reducer_stations";
import ActiveStationReducer from "../reducers/reducer_activeStation"

const rootReducer = combineReducers({
  stations: StationsReducer,
  activeStation: ActiveStationReducer
});

export default rootReducer;
