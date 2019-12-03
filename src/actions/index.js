import axios from "axios";
const API_END_POINT = "https://data.rennesmetropole.fr/api/records/1.0/search/?";
const STATIONS = "dataset=etat-des-stations-le-velo-star-en-temps-reel&facet=nom" +
    "&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles" +
    "&facet=nombrevelosdisponibles&rows=54";

export const STATION_SELECTED = 'STATION_SELECTED';
export const GET_STATIONS = 'GET_STATIONS';
export const GET_CITIES = 'GET_CITIES';

export function selectStation(station) {
    console.log("selected: ",station);

    return{
        type:STATION_SELECTED,
        payload:station
    }
}

export function fetchStations() {
    return function (dispatch){
        axios.get(`${API_END_POINT}${STATIONS}`)
            .then((response) => {
                dispatch({type:GET_STATIONS,payload: response.data.records});
            });
    }
}

export function getCities (){
    return function (dispatch){

    }
}