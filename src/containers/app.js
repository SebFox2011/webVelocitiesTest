import React, {Component} from 'react';
import SearchBar from "../components/search-bar";
import BikeList from "./BikeList";
import StationList from "./stationList";
import axios from "axios"

const API_END_POINT = "https://data.rennesmetropole.fr/api/records/1.0/search/?";
const STATIONS = "dataset=etat-des-stations-le-velo-star-en-temps-reel&facet=nom" +
    "&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles" +
    "&facet=nombrevelosdisponibles&rows=54";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            stations: []
        }
    }

    componentWillMount() {
        this.initStations();
    }

    initStations() {
        axios.get(`${API_END_POINT}${STATIONS}`).then((response) => {
            this.setState({stations: response.data.records});
        });
    }

    render() {
        const renderBikeList = () => {
            if (this.state.stations.length>1){
                return <BikeList stationList={this.state.stations}></BikeList>
            }
        };
        return (
            <div>
                <h1 className="alert alert-info">VELOCITIES</h1>
                <SearchBar/>
                <StationList/>
                {renderBikeList()}
            </div>

        );
    }
}
