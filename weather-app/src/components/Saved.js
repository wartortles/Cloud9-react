import React, { Component } from 'react';
import axios from 'axios';

class Saved extends Component {
	constructor(props){
		super(props)

		this.state = {
			locations: []
		}

		this.linkToId = this.linkToId.bind(this);
		
	}


componentDidMount() {
	//console.log("THIS DID MOUNT!");
	axios.get('http://localhost:8080/weather')
	.then(response => {
		console.log(`Mount: `, response.data)

		const result = response.data.weatherData.map((elem, index) => {
			const icon = elem.currently.icon;
			const temp = elem.currently.temperature;
			const high = elem.daily.data[0].temperatureHigh;
			const low = elem.daily.data[0].temperatureLow;
			return (
					<div data-id={response.data.locations[index].id} key={response.data.weatherData.indexOf(elem)}>
						<p>{icon}</p>
						<p>{temp}</p>
						<p>{low}</p>
						<p>{high}</p>
					</div>
			)
		});

		//console.log(result);

		this.setState({
			locations: result
		})
	});
}

linkToId(event, weatherId) {
	event.preventDefault();
	this.props.linkToPage(weatherId)
	}


render() {

	return(
		<div className="saved-tiles" onClick={this.linkToId}>
			{this.state.locations}
		</div>

		);
	}
}


export default Saved;