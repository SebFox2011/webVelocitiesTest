import {GET_STATIONS} from '../actions'

const initialState = {
    stations:[]
};

export  function StationsReducer (){
    return [
        {nom:'République',idStation:1,nbVeloDispo:12,nbEmplacementsDispo:13,lat:48.001,lng:-1.109,Etat:"EnFonctionnement",Favoris:"False"},
        {nom:'Beaux Arts',idStation:2,nbVeloDispo:6,nbEmplacementsDispo:14,lat:48.101,lng:-1.001,Etat:"EnFonctionnement",Favoris:"False"},
        {nom:'Villejean-Université',idStation:3,nbVeloDispo:8,nbEmplacementsDispo:4,lat:48.031,lng:-1.010,Etat:"EnFonctionnement",Favoris:"False"},
        {nom:'Beaulieu',idStation:4,nbVeloDispo:3,nbEmplacementsDispo:4,lat:48.801,lng:-1.019,Etat:"EnFonctionnement",Favoris:"False"}
    ]
}

export function StationsReducerAPI(stationsAPI = initialState,action){
    switch(action.type){
        case GET_STATIONS:
                return{
                    ...stationsAPI,
                  stations: getStationInfo(action.payload)
                };
    }
    return stationsAPI;

}

function getStationInfo(data) {
    return data.map((station) => {
        return {
            name: station.name
        }
    })
}