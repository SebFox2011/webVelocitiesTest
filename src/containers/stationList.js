import React, {Component} from 'react';
import {connect} from 'react-redux';
class StationList extends Component {
    render() {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.myStations.map((station)=>{
                            return(
                                <li className="list-group-item" key={station.idStation}>
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

function mapStateToProps(state) {
    return {
        myStations:state.stations
    }
}

export default connect(mapStateToProps)(StationList);