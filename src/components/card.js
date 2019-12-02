import React, {Component} from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position:{
                lat:this.props.coordonnee[0],
                lng:this.props.coordonnee[1]
            },
            zoom:13
        };
    }

    render() {
        const mapStyles = {
            width: '20%',
            height: '50%',
        };
        return (
            <div className="container">
                <div className="row">
                    <Map
                        google={this.props.google}
                        zoom={this.state.zoom}
                        style={mapStyles}
                        initialCenter={this.state.position}>
                        <Marker position={this.state.position} />
                    </Map>
            </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDBZNOIOXnm8lazHBM9ifk-L-GkayWS1zc'
})(Card);