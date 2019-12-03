import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectStation,fetchStations} from "../actions/index";
import {bindActionCreators} from "redux";

class StationList extends Component {
    render() {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.myStations.map((station)=>{
                            return(
                                <li className="list-group-item" key={station.idStation}
                                onClick={()=>this.props.selectStation(station)}>
                                    {station.nom}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        myStations:store.stations
    }
}

const mapDispatchToProps = {selectStation};
//const mapDispatchToProps = {fetchStations};

export default connect(mapStateToProps,mapDispatchToProps)(StationList);