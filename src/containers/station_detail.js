import React, {Component} from 'react';
import {connect} from "react-redux";

class StationDetail extends Component {

    render() {
        const {myActiveStation} = this.props;
        if (!myActiveStation)
        {
            return <div>Sélectionner une station pour démarrer</div>
        }
        return (
            <div>
                <h3>Détail de {myActiveStation.nom}</h3>
                <ul>
                    <li>Id:{myActiveStation.idStation} </li>
                    <li>Etat:{myActiveStation.Etat} </li>
                    <li>Nombre de vélos disponibles:{myActiveStation.nbVeloDispo} </li>
                    <li>Nombre d'emplacements disponibles:{myActiveStation.nbEmplacementsDispo} </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
     myActiveStation: store.activeStation
    }
}

export default connect (mapStateToProps) (StationDetail);