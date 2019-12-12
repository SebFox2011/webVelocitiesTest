import React, {Component} from 'react';
import {getCities} from "../actions";
import {connect} from "react-redux";


class SearchCity extends Component {

    componentWillMount() {
        this.props.getCities();
    }

    renderSelectCities() {
        return (
            <select name="" id="">
                {this.props.cities.map((city) => {
                    return (
                        <option key={city._id} value={city._id}>
                            {city.name}
                        </option>

                    )
                })}
            </select>
        )
    }

    render() {
        return (
            <form>
                {this.renderSelectCities()}
            </form>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        cities: store.citiesReducer.cities
    }
};

const mapDispatchToProps = {
    getCities
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);

