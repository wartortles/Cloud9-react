import React, { Component } from 'react';
import axios from 'axios';

class Saved extends Component {
	constructor(props){
		super(props)

		this.state = {
			locations: []
		}

		this.onClick = this.onClick.bind(this);

	}


componentDidMount() {
	//console.log("THIS DID MOUNT!");
	axios.get('http://localhost:8080/weather')
	.then(response => {
		console.log(`Mount: `, response.data)

		const result = response.data.weatherData.map((elem, index) => {
			const icon = elem.currently.icon;
			const temp = Math.round(elem.currently.temperature);
			const high = Math.round(elem.daily.data[0].temperatureHigh);
			const low = Math.round(elem.daily.data[0].temperatureLow);
			const name = response.data.locations[index].name
			return (
					<div data-id={response.data.locations[index].id} key={response.data.weatherData.indexOf(elem)} onClick={this.onClick}>
						<h3 data-id={response.data.locations[index].id}>{name}</h3>
						<p data-id={response.data.locations[index].id}>{icon}</p>
						<p data-id={response.data.locations[index].id}>{temp}</p>
						<p data-id={response.data.locations[index].id}>{low}</p>
						<p data-id={response.data.locations[index].id}>{high}</p>
					</div>
			)
		});

		//console.log(result);

		this.setState({
			locations: result
		}, () => {console.log(this.state.locations)})
	});
}

onClick(event) {
 	event.preventDefault();
	this.props.linkToPage(event.target.dataset.id);
	console.log(event.target.dataset.id);
	}


render() {

	return(
		<div className="saved-tiles">
			{this.state.locations}
		</div>

		);
	}
}


export default Saved;
