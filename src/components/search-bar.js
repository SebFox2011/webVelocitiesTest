import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText:"",
            placeHolder:"Entrez votre recherche ...",
            click:0
        }
    }

    shouldComponentUpdate(){
        return true;
    }
    render() {
        return (
            <div>
            <input onChange={this.handleChange.bind(this)}
                   placeholder={this.state.placeHolder}
                   onClick={this.click.bind(this)}/>
            <p>{this.state.searchText}</p>
            <p>{this.state.click}</p>
            </div>
        );
    }

    handleChange(event){
        this.setState({searchText:event.target.value})
    }

    click(){
        console.log("click")
        this.setState({click : this.state.click+1});
    }
}

export default SearchBar;