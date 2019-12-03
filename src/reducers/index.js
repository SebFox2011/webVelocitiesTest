import { combineReducers } from 'redux';
import {StationsReducer, StationsReducerAPI} from "./reducer_stations";
import ActiveStationReducer from "../reducers/reducer_activeStation"

const rootReducer = combineReducers({
  stations: StationsReducer,
  activeStation: ActiveStationReducer,
  stationsAPI:StationsReducerAPI
});

export default rootReducer;
