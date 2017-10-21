import React, { Component } from 'react';
import './App.css';
import Saved from './Components/Saved';
import Create from './Components/Create';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import ShowPage from './Components/ShowPage';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mode: "viewAll",
			results: []
		}

		this.linkToAll = this.linkToAll.bind(this);
		this.linkToPage = this.linkToPage.bind(this);
		this.addNew = this.addNew.bind(this);	
		this.goToSearch = this.goToSearch.bind(this);
    this.getResults = this.getResults.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
    this.searchWithInput = this.searchWithInput.bind(this);
	};


linkToAll() {
	this.setState({
		mode: "viewAll"
	});
};

linkToPage(weatherId) {
	this.setState({
		mode: "weatherPage",
		weatherId: weatherId
	});
};

addNew(event) {
	event.preventDefault();
	this.setState({
		mode: "createNew"
	})
}

goToSearch() {
	this.setState({
		mode:"searchAll"
	})
}


  // populate autofilled search results
  getResults(input) {
    if (input.length === 0) {
      this.setState({ results: [] }, () => console.log(this.state.results));
    }
    else { axios.get(`http://localhost:8080/search/${input}`).then(response => {
      this.setState({ results: response.data.results }, () => console.log(this.state.results));
      })
    }
  }
  // save a location by clicking on it
  saveLocation(placeId, name) {
    axios.post(`http://localhost:8080/search/geocode/${placeId}`, { name: name }).then(response => {
      this.setState({ results: [] });
      })
  }
  // search for an save a location by text entry
  searchWithInput(input) {
    axios.get(`http://localhost:8080/search/single/${input}`).then(response => {
      this.setState({ results: '' }, () => console.log(this.state.results));
      })
  }

  render() {

let content;

		const mode = this.state.mode;
		if (mode === "viewAll") {
			content = <Saved linkToPage={this.linkToPage} addNew={this.addNew} goToSearch={this.goToSearch} />;
		} else if (mode === "searchAll") {
			content = <SearchBar linkToAll={this.linkToAll} />
		} else if (mode === "createNew") {
			content = <Create linkToAll={this.linkToAll}/>
		} else if (mode === "weatherPage") {
			content = <ShowPage id={this.state.weatherId} linkToAll={this.linkToAll} />
		}

    return (

      <div className="App">

      {content}
      <br />
      <h1>WEATHER APP</h1>


         <SearchBar getResults={this.getResults} searchWithInput={this.searchWithInput}/> <br/>
        <SearchResults saveLocation={this.saveLocation} results={this.state.results}/> 

      </div>
    );
  }
}


export default App;
