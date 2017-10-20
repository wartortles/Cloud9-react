import React, { Component } from 'react';
import axios from 'axios';

class Saved extends Component {
	constructor(props){
		super(props)

		this.state = {
			search: "",
			locations: [],
			results: []
		}

		this.linkToId = this.linkToId.bind(this);
		this.forecast = this.forecast.bind(this);
	}


componentDidMount() {
	//console.log("YO FROM DID MOUNT!");
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
						<div>{icon}</div>
						<div>{temp}</div>
						<div>{high}</div>
						<div>{low}</div>
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
	this.props.goToId(weatherId)
	
	}



render() {

	return(
		<div>
			{this.state.locations}
		</div>

		);
	}
}


export default Saved;