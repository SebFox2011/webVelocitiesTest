import {GET_CITIES} from "../actions";

const initialState = {
    cities: []

};

export default function (cityReducer = initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            return {
                ...cityReducer,
                cities: getCityInfo(action.payload)
            }
    }
    return cityReducer;
}

function getCityInfo(data) {
    return data.map((city) => {
        return {
            name: city.name
        }
    })
}