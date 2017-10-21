<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import Saved from './Components/Saved';
import Tile from './Components/Tile';
import Create from './Components/Create';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mode: "viewAll"
		}

		this.linkToAll = this.linkToAll.bind(this);
		this.linkToPage = this.linkToPage.bind(this);
		this.addNew = this.addNew.bind(this);

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

render() {

let content;

		const mode = this.state.mode;
		if (mode === "viewAll") {
			content = <Saved goToId={this.linkToPage} clickNew={this.addNew}/>;
		} else if (mode === "weatherPage") {
			content = <Tile id={this.state.weatherId} goToAll={this.linkToAll}/>;
		} else if (mode === "createNew") {
			content = <Create goToAll={this.linkToAll}/>
		} 

=======
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.getResults = this.getResults.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
    this.searchWithInput = this.searchWithInput.bind(this);
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
>>>>>>> 5283b4873d419b59a990459663a4730f4fdf36e7
    return (

      <div className="App">
<<<<<<< HEAD
      {content}
      <br />
      <h1>WEATHER APP</h1>
      	<div className="button" onClick={this.createNew}>+ADD+</div>
=======
        <h1>WEATHER APP</h1>

        {/* <SearchBar getResults={this.getResults} searchWithInput={this.searchWithInput}/><br/>
        <SearchResults saveLocation={this.saveLocation} results={this.state.results}/> */}

>>>>>>> 5283b4873d419b59a990459663a4730f4fdf36e7
      </div>
    );
  }
}

export default App;
