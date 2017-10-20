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

  getResults(input) {
    if (input.length === 0) {
      this.setState({ results: [] }, () => console.log(this.state.results));
    }
    else { axios.get(`http://localhost:8080/search/${input}`).then(response => {
      this.setState({ results: response.data.results }, () => console.log(this.state.results));
      })
    }
  }

  saveLocation(placeId, name) {
    axios.post(`http://localhost:8080/search/geocode/${placeId}`, { name: name }).then(response => {
      this.setState({ results: [] });
      })
  }

  searchWithInput(input) {
    axios.get(`http://localhost:8080/search/single/${input}`).then(response => {
      this.setState({ results: '' }, () => console.log(this.state.results));
      })
  }

  render() {
    return (
      <div className="App">
        <h1>WEATHER APP</h1>

        {/* <SearchBar getResults={this.getResults} searchWithInput={this.searchWithInput}/><br/>
        <SearchResults saveLocation={this.saveLocation} results={this.state.results}/> */}

      </div>
    );
  }
}

export default App;
