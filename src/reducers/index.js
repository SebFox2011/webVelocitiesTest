import { combineReducers } from 'redux';
import {StationsReducer, StationsReducerAPI} from "./reducer_stations";
import ActiveStationReducer from "../reducers/reducer_activeStation"
import reducer_cities from "./reducer_cities";

const rootReducer = combineReducers({
  stations: StationsReducer,
  activeStation: ActiveStationReducer,
  stationsAPI:StationsReducerAPI,
  citiesReducer:reducer_cities
});

export default rootReducer;
