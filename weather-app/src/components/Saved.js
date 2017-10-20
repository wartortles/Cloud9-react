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

forecast(data) {

	//console.log("YO!");
	//console.log("===================");
	//console.log(data);
	//console.log("===================");
	//const results = data.map

	// const mappedItems = data.weatherData.map((weather, index) => {
	// 	return(<div key={index.toString()}>
	// 	<p>weather.currently.icon</p>
 //  	<h1>weather.currently.temperature</h1>
	// 	<p>weather.daily.data.temperatureHigh</p>
	// 	<p>weather.daily.data.temperatureLow</p>
	// 	</div>)

	// })

	// return mappedItems;

	// console.log(`THIS IS THE weather data: ${data}`)
	
	// const onClick = event => {
	// 	event.preventDefault();
	// 	this.linkToId(event, id);
	// };

	// return (
	// 		<div className="tile-data">
	// 		<h2>Los Angeles, CA, United States</h2>
 //          <a href={`weather/${id}`} onClick={onClick}>
 //            {icon}
 //          </a>
 //          <h1>{temperature}</h1>
 //        <span className="low-high">
 //          <p>
 //            {low} {high}
 //          </p>
 //        </span>
 //     </div>
 //    );
 //  }
}


render() {
	// console.log(`RENDERING WEATHER DATA (this.state): ${this.state}`)
	//const locations = this.forecast(this.state.locations);

	return(
		<div>

			{this.state.locations}
		</div>


		);
}
}


export default Saved;