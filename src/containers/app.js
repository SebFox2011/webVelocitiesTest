import React, {Component} from 'react';
import SearchBar from "../components/search-bar";
import BikeList from "./BikeList";
import StationList from "./stationList";
import axios from "axios"
import StationDetail from "./station_detail";
import SearchCity from "./searchCity";

const https = require('https');

const API_END_POINT = "https://data.rennesmetropole.fr/api/records/1.0/search/?";
const STATIONS = "dataset=etat-des-stations-le-velo-star-en-temps-reel&facet=nom" +
    "&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles" +
    "&facet=nombrevelosdisponibles&rows=55";

const API_VELOCIES ="http://localhost:8000/stations";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            stations: [],
            heure:new Date()
        }
    }

    componentWillMount() {
        this.initStationsVelocities();
    }

    initStations() {
        axios.get(`${API_END_POINT}${STATIONS}`).then((response) => {
            this.setState({stations: response.data.records});
        });
        this.setState({
            heure:new Date()
        });
    }

    initStationsVelocities() {
        axios.get(`${API_VELOCIES}`).then((response) => {
            this.setState({stations: response.data});
            console.log(response.data)
        });
        this.setState({
            heure:new Date()
        });
    }

    render() {
        const renderBikeList = () => {
            if (this.state.stations.length>1){
                return <BikeList stationList={this.state.stations}></BikeList>
            }
            else {
                return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
            }
        };
        return (
            <div>
                <h1 className="alert alert-info">VELOCITIES</h1>

                <div className="container">
                    <div className="row">
                        <SearchBar/>
                        <SearchCity/>
                    </div>
                </div>
                <div>
                    <h2>Date et heure de requette: {this.state.heure.toLocaleTimeString()}</h2>
                    <p className="text-right m-0">
                        <a className="btn btn-primary"
                           onClick={()=>this.initStationsVelocities()}>
                            <i className="far fa-circle"></i> Rafraichir</a>
                    </p>
                </div>
                {renderBikeList()}
            </div>

        );
    }
}
