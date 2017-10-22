import React, { Component } from 'react';
import './App.css';
import Saved from './Components/Saved';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import DetailedView from './Components/DetailedView';

import axios from 'axios';
import fab from './images/fab.png';

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
    // this.delete = this.delete.bind(this);
    this.onDelete = this.onDelete.bind(this);
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

//  delete(results){
//     console.log(`DELETED:, ${results}`);
//     axios.delete(`http://localhost:8080/weather/${results.id}`)
//       .then(res => {
//         this.setState(state => {
//           state.results = state.results.filter(s => s.id !== results.id);
//           state.mode = 'viewAll';
          
//           return prev;
//         });
//      })
// }

 onDelete(id) {
        axios.delete('http://localhost:8080/weather')
            .then((data) => {
                let weatherData = this.state.weatherData.filter((post) => {
                    return id !== post.id;
                });

                this.setState(state => {
                    state.weatherData = weatherData;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
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
      this.setState({ mode: "viewAll", results: [] });
      })
  }
  // search for an save a location by text entry
  searchWithInput(input) {
    axios.get(`http://localhost:8080/search/single/${input}`).then(response => {
      this.setState({ mode: "viewAll", results: '' }, () => console.log(this.state.results));
      })
  }

  render() {

let content;

		const mode = this.state.mode;
		if (mode === "viewAll") {
			content = <Saved linkToPage={this.linkToPage} addNew={this.addNew} goToSearch={this.goToSearch} />;
		} else if (mode === "searchAll") {
			content = 
      <div>
      <div className='dimmed' onClick={this.linkToAll}>
      <Saved className='dimmed' linkToPage={this.linkToPage} addNew={this.addNew} goToSearch={this.goToSearch} />
      </div>
      <div className='search-div'>
        <SearchBar linkToAll={this.linkToAll} getResults={this.getResults} searchWithInput={this.searchWithInput} />
        <SearchResults saveLocation={this.saveLocation} results={this.state.results}/>
        </div>
        </div>
		} else if (mode === "weatherPage") {
			content = <DetailedView id={this.state.weatherId} linkToAll={this.linkToAll} />
		}

    return (

      <div className="App">


      {content}

        <img src={fab} className="add_logo" alt="add_logo" onClick={this.goToSearch}/>
      </div>
    );
  }
}


export default App;
