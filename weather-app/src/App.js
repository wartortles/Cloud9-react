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

    return (

      <div className="App">
      {content}
      <br />
      <h1>WEATHER APP</h1>
      	<div className="button" onClick={this.createNew}>+ADD+</div>
      </div>
    );
  }
}

export default App;
