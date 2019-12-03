export const STATION_SELECTED = 'STATION_SELECTED';
export function selectStation(station) {
    console.log("selected: ",station);

    return{
        type:STATION_SELECTED,
        payload:station
    }
}