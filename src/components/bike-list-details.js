import React, {Component} from 'react';
import Card from "./card";

class BikeListDetails extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="d-flex flex-row border rounded">
                    <div className="p-0 w-25">
                        <i className="fas fa-map"></i>
                        <Card coordonnee={this.props.station.location}/>
                    </div>
                    <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
                        <h4 className="text-primary">{this.props.station.name}</h4>
                        <h5 className="text-info">
                            <span className={this.props.station.state == "En panne" ? "text-danger" : "text-info"}>
                                {this.props.station.state}</span>
                        </h5>
                        <ul className="m-0 float-left" style={{listStyleType: "none", margin: 0, padding: 0}}>
                            <li><i
                                className="fas fa-bicycle"></i> VéloDispo:
                                <span className={this.props.station.bikesAvailable < 6 ? "text-danger" : "text-success"}>
                                    {this.props.station.bikesAvailable}</span>
                            </li>
                            <li><i
                                className="fas fa-compress"></i> EspacesLibres:
                                <span className={this.props.station.slotsAvailable < 6 ? "text-danger" : "text-success"}>
                                    {this.props.station.slotsAvailable}</span>
                            </li>
                        </ul>
                        <p className="text-right m-0"><a href="#" className="btn btn-primary"><i
                            className="far fa-star"></i> Favoris</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BikeListDetails;