import React, {Component} from 'react';

class SearchCity extends Component {

    componentWillMount (){

    }

    renderSelectCities(){
        return (
            <select name="" id="">
                <option value="">

                </option>
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

export default SearchCity;