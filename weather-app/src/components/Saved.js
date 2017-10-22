import React, { Component } from 'react';
import bar from './images/bar.png';
import fab from './images/fab.png';
import del from './images/delete.png';
import addTile from './images/add-tile.png';
import fog from './images/fog.png';
import cloudy from './images/cloudy.png';
import partlycloudynight from './images/partly-cloudy-night.png';
import clearnight from './images/clear-night.png';
import partlycloudyday from './images/partly-cloudy-day.png';
import rain from './images/rain.png';
import sleet from './images/sleet.png';
import snow from './images/snow.png';
import clearday from './images/clear-day.png';
import wind from './images/wind.png';
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
            let icon = elem.currently.icon;
            let style;
            let barStyle;

            if (icon === "clear-day"){
                icon = clearday;
                style = {
                    backgroundColor: '#F67F23' ,
                }
                barStyle = {
                    backgroundColor:  '#DE751B' ,
                }   
            }
            else if(icon === "clear-night"){
                icon = clearnight;
                style = {
                    backgroundColor: '#607D8B' 
                }
                barStyle = {
                    backgroundColor: '#567280 '
                }
            }
            else if(icon === "rain"){
                icon = rain;
                style = {
                    backgroundColor: '#3DB9F5' ,
                }
                barStyle = {
                    backgroundColor: '#36A8E4' 
                }
            }
            else if(icon === "snow"){
                icon= snow,
                style ={
                    backgroundColor: '#b048c1',
                }
                barStyle ={
                    backgroundColor:  '#9c3faa' ,
                }
            }
            else if(icon === "sleet"){
                icon= sleet,
                style= {
                    backgroundColor: '#D0D7DE' ,
                }
                barStyle={
                backgroundColor: '#B8C8C8',
                }
            }
            else if(icon === "wind"){
                icon= wind,
                style= {
                    backgroundColor: '#87DBBA', 
                }
                barStyle= {
                backgroundColor: '#76CAA8', 
                }
            }
            else if(icon === "fog"){
                icon= fog,
                style= {
                backgroundColor: '#90A4AD' 
                }
                barStyle = {
                backgroundColor: '#82949E'
            }
            }
            else if(icon === "cloudy"){
                icon= cloudy,
                style={ 
                    backgroundColor: '#90A4AD'
                } 
                barStyle={  
                    backgroundColor: '#82949E'
                } 
            }
            else if(icon === "partly-cloudy-day"){
                icon= partlycloudyday,
                style={
                    backgroundColor:  '#ECD23F'
                }
                barStyle={ 
                backgroundColor: '#D4C03A' 
                }
            }
            else if(icon === "partly-cloudy-night"){
                icon= partlycloudynight,
                style={
                    backgroundColor: '#80CBC4'
                } 
                barStyle={
                backgroundColor: '#6FBBB1'
                } 
            }

            const temp = Math.round(elem.currently.temperature);
            const high = Math.round(elem.daily.data[0].temperatureHigh);
            const low = Math.round(elem.daily.data[0].temperatureLow);
            const name = response.data.locations[index].name
            return (
                    <div>
                    <li className="flex-item" style={style} data-id={response.data.locations[index].id} key={response.data.weatherData.indexOf(elem)} onClick={this.onClick}>
                       <div className="tileInfo">
                            <input class='delete' type="image" src={del} value="Delete" />
                            <div className="titleViewAll" data-id={response.data.locations[index].id}>{name}</div>
                            <div className="iconViewAll">
                                <img src={icon} className="viewAll_logo"/> </div>
                            <div className="tempViewAll" data-id={response.data.locations[index].id}>{temp}°</div>
                        
                            <div className="bar_tile" style={barStyle}>
                                <p data-id={response.data.locations[index].id}> L {low}° &nbsp;&nbsp; H {high}°</p>
                               
                            </div>

                        </div>    
                    </li>
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
      <div>
      <div className="nav-bar-viewAll">
              <img src={bar} className="bar_logo" alt="bar_logo" />
              <div className="editButton"> EDIT </div>
          </div>

        <ul className="flex-container"> 
                {this.state.locations}

                <li className="flex-item" id="extraTile">
                    <div className="extraTile">
                        <img onClick={this.props.goToSearch} src={addTile} className="addOne_logo" /> 
                            <p> GET SOME WEATHER </p>
                     </div>
                             
                </li>
      </ul>
      
      </div>
        );
    }
}


export default Saved;