import React, {Component} from 'react';
import BikeListDetails from "../components/bike-list-details";

class BikeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-4 mb-4">
                <div className="container">
                    <div className="row mb-3">
                        {
                            this.props.stationList.map(station => {
                                return <BikeListDetails key={station.idStation} station={station}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BikeList;