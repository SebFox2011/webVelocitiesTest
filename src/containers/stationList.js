import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStations} from "../actions/index";

class StationList extends Component {
    componentWillMount() {
        this.props.fetchStations();
    }
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

const mapDispatchToProps = {fetchStations};
//const mapDispatchToProps = {fetchStations};

export default connect(mapStateToProps,mapDispatchToProps)(StationList);