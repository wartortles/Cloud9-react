// import React, { Component } from 'react';
// import axios from 'axios';

// class DetailedView extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             haveData: false, 
//         }
//         this.linkToSaved = this.linkToSaved.bind(this);
//     }
//     componentDidMount() {
//     	console.log('MOUNTING ID DATA')
//         axios.get(`http://localhost:8080/weather/${this.props.id}`)
//         .then(response => {
//             console.log('got weather data, Data: ', response.data);

//             this.setState({
//             	locationData: response.data.locations,
//             	weatherData: response.data.weatherData, 
//             	haveData: true
//             })
//         })
//     }

//     retrieveData() {
//     	const location = this.state.locations.map((elem, index) => {
//     		const id = elem.id
//     		const name = elem.name
//     	})
//     	const weather = this.state.weatherData.map((element, index) => {
//     		const temp = element.currently.temperature
//     		const high = element.daily.data.temperatureHigh
//     		const low = element.daily.data.temperatureLow
//     		const icon = element.daily.data.icon
//     		const nextHour = element.hourly.data[1].summary
//     	}

//     	return (
//     		<div dataId={response.data.locations[index].id} key={response.data.weatherData.indexOf(elem)}>
//     		<h1>{name}</h2>
//     		<
//     		)
//     }


//     linkToSaved(event) {
//         event.preventDefault();
//         console.log('props: ', this.props);
//         this.props.linkToAll();
//     }
//  // parseResults(data){
//  //    return data.filter(show => {
//  //      return show.show ? true :false
//  //    }).map(show => {
//  //      return {
//  //        name: show.show.name ? show.show.name : "N/A",
//  //        runtime: show.show.runtime ? show.show.runtime : "N/A",
//  //        rating: show.show.rating ? show.show.rating.average : "N/A",
//  //        network: show.show.network ? show.show.network.name : "N/A",
//  //        summary: show.show.summary || "N/A",
//  //        img: show.show.image ? show.show.image.medium : "N/A"
//  //      }
//  //    })
//  //  }
    
//     render() {
//         if(!this.state.haveData) {
//             return <p>awaiting data...</p>
//         }
        
//         // const week = this.state.weatherData
//         // console.log(week);
//         //     week.map(haveData => {
//         //         return {
//         //             temperature: week.currently.temperature,
//         //             temperatureHigh: week.daily.data.temperatureHigh,
//         //             temperatureLow: week.daily.data.temperatureLow,
//         //             icon: week.daily.data.icon,
//         //             summary: week.hourly.summary,
        
//         //         }
//             // })
//          return (
//       <div className="single">
//       	<h1>WEATHER DETAIL</h1>

//       	<h1 className="name">{this.state.location.name}</h1>
//         <h2 className="icon">{this.state.weatherData.currently.icon} </h2>
//         <p className="temp">{this.state.weatherData.currently.temperature}</p>
//         <p className="low-high">{this.state.weatherData.daily.data.temperatureLow}, {this.state.weatherData.daily.data.temperatureHigh}</p>
//         <p className="summary">{this.state.weatherData.currently.summary}</p>
//       <br />  
//         <br />     
//         <a className="button" href="/" onClick={this.linkToAll}>Back To All</a>
//         <br />
      
//       </div>
//       )
//     }
// }
// export default DetailedView;