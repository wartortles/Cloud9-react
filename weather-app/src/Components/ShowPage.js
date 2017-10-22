import React, { Component } from 'react';
import close from './images/group.png'
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
import moment from 'moment';

class ShowPage extends Component {
  constructor(props) {
    super(props)
        this.state = {
            location: [],
            name: '' 
        }
        this.linkToSaved = this.linkToSaved.bind(this);
        this.getIcon = this.getIcon.bind(this);
  }

  getIcon(icon) {
            let iconName = icon;
            let style;
            let barStyle;

            if (iconName === "clear-day") {
                 iconName = clearday;  
            }
            else if(iconName === "clear-night"){
                iconName = clearnight;
            }
            else if(iconName === "rain"){
                iconName = rain;
            }
            else if(iconName === "snow"){
                iconName = snow;
            }
            else if(iconName === "sleet"){
                iconName = sleet;
            }
            else if(iconName === "wind"){
                iconName = wind;
            }
            else if(iconName === "fog"){
                iconName = fog;
            }
            else if(iconName === "cloudy"){
                iconName = cloudy;
            }
            else if(iconName === "partly-cloudy-day"){
                iconName = partlycloudyday;
            }
            else if(iconName === "partly-cloudy-night"){
                iconName = partlycloudynight;
            }
            return iconName;
  	}

  componentDidMount() {
        axios.get(`http://localhost:8080/weather/${this.props.id}`)
        .then((response) => {
            
            console.log('got weather data, Data: ', response.data);
            const icon = this.getIcon(response.data.weather.currently.icon);
            const  temp = Math.round(response.data.weather.currently.temperature);
            const  high = Math.round(response.data.weather.daily.data[0].temperatureHigh);
            const  low  = Math.round(response.data.weather.daily.data[0].temperatureLow);
            this.setState({name: response.data.location.name});
            const summary = response.data.weather.hourly.summary;
            const time = response.data.weather.daily.data[0].time;
            	const day = moment.unix(time).format("ddd")
            
            const icon1 = this.getIcon(response.data.weather.daily.data[1].icon);
            const high1 = Math.round(response.data.weather.daily.data[1].temperatureHigh);
            const low1 = Math.round(response.data.weather.daily.data[1].temperatureLow);
            const time1 = response.data.weather.daily.data[1].time;
            	const day1 = moment.unix(time1).format("ddd")

            const icon2 = this.getIcon(response.data.weather.daily.data[2].icon);
            const high2 = Math.round(response.data.weather.daily.data[2].temperatureHigh);
            const low2 = Math.round(response.data.weather.daily.data[2].temperatureLow);
            const time2 = response.data.weather.daily.data[2].time;
            	const day2 = moment.unix(time2).format("ddd")

            const icon3 = this.getIcon(response.data.weather.daily.data[3].icon);
            const high3 = Math.round(response.data.weather.daily.data[3].temperatureHigh);
            const low3 = Math.round(response.data.weather.daily.data[3].temperatureLow);
            const time3 = response.data.weather.daily.data[3].time;
            	const day3 = moment.unix(time3).format("ddd")
            const icon4 = this.getIcon(response.data.weather.daily.data[4].icon);
            const high4 = Math.round(response.data.weather.daily.data[4].temperatureHigh);
            const low4 = Math.round(response.data.weather.daily.data[4].temperatureLow);
            const time4 = response.data.weather.daily.data[4].time;
            	const day4 = moment.unix(time4).format("ddd")

            const icon5 = this.getIcon(response.data.weather.daily.data[5].icon);
            const high5 = Math.round(response.data.weather.daily.data[5].temperatureHigh);
            const low5 = Math.round(response.data.weather.daily.data[5].temperatureLow);
            const time5 = response.data.weather.daily.data[5].time;
            	const day5 = moment.unix(time5).format("ddd")
            const icon6 = this.getIcon(response.data.weather.daily.data[6].icon);
            const high6 = Math.round(response.data.weather.daily.data[6].temperatureHigh);
            const low6 = Math.round(response.data.weather.daily.data[6].temperatureLow);
            const time6 = response.data.weather.daily.data[6].time;
            	const day6 = moment.unix(time6).format("ddd")
            const icon7 = this.getIcon(response.data.weather.daily.data[7].icon);
            const high7 = Math.round(response.data.weather.daily.data[7].temperatureHigh);
            const low7 = Math.round(response.data.weather.daily.data[7].temperatureLow);
            const time7 = response.data.weather.daily.data[7].time;
            	const day7 = moment.unix(time7).format("ddd")


            const hourlyData = response.data.weather.hourly.data.map((hr, index) => {
                console.log(hr)
                if (index < 12) {
                const hour = hr.time;
                const currentHr = Math.round(hr.temperature);
                	const hourlyTime = moment.unix(hour).format("ha");
                return (
                    
                        <div id="hour0" className="hours">  {hourlyTime} <br></br> {currentHr} </div>
                     
               	
                    )
            }
            })
            
            const result = (
                    <div className ="current" data-id={response.data.location.id} onClick={this.onClick}>
                    	<div className="showPage">
            
           <div className="row1">
                    <div className="row1col1">
                         <img data-id = {response.data.location.id} src={icon} className="show_icon" alt="show_icon" />
                    </div>

                    <div className="row1col2">
                        <h4 data-id ={response.data.location.id}> TODAY </h4>
                        <h1 data-id = {response.data.location.id}>{temp} </h1>
                        <h4 data-id = {response.data.location.id}> L {low}° H {high}° </h4>
                        <p data-id = {response.data.location.id}> NEXT HOUR <br></br> 
                        {summary} </p>




                    </div>

                    <div className="row1col3">
                        <div id="day1" className="days"> 
                        <p className="headWeekDays"> <b> {day1} </b> </p>
                        <img data-id={response.data.location.id} src={icon1} className="days_icon" />
                        <p data-id={response.data.location.id}> L {low1}° H {high1}° </p>
                        </div>
                        <div id="day2" className="days"> 
                        <p className="headWeekDays" data-id={response.data.location.id}> <b> {day2} </b> </p>
                        <img data-id={response.data.location.id} src={icon2} className="days_icon" />
                        <p data-id={response.data.location.id}> L {low2}° H {high2}° </p>
                        </div>
                        <div id="day3" className="days"> 
                        <p className="headWeekDays" data-id={response.data.location.id}> <b> {day3} </b> </p>
                        <img data-id={response.data.location.id} src={icon3} className="days_icon" />
                        <p data-id={response.data.location.id}> L {low3}° H {high3}° </p>
                        </div>
                        <div id="day4" className="days"> 
                        <p className="headWeekDays"> <b> {day4} </b> </p>
                        <img data-id={response.data.location.id} src={icon4} className="days_icon" />
                        <p data-id={response.data.location.id}> L {low4}° H {high4}° </p>
                        </div>
                        <div id="day5" className="days"> 
                        <p className="headWeekDays" data-id={response.data.location.id}> <b> {day5} </b> </p>
                        <img data-id={response.data.location.id} src={icon5} className="days_icon" />
                        <p data-id={response.data.location.id}> L {low5}° H {high5}° </p>
                        </div>
                        <div id="day6" className="days"> 
                        <p className="headWeekDays"> <b> {day6} </b> </p>
                        <img data-id={response.data.location.id} src={icon6} className="days_icon" />
                        <p data-id={response.data.location.id}> L {low6}° H {high6}° </p>
                        </div>
                    </div>
                </div>
                    
                    <div className="row2">
                        <p className="hoursTitle"> NEXT 12 HOURS </p>
                      </div>

                    <div className="row3">
                    
                    </div>

                </div>
               </div>
             )
                  
        this.setState({
        location: result,
        weekly: hourlyData
        
    })
        })
    }

linkToSaved(event) {
        event.preventDefault();
        console.log('props: ', this.props);
        this.props.linkToAll();
    }
render() {
        return(
            <div >
            	<div className="nav-bar-ShowPage">
              <img src={close} className="bar_logo" alt="bar_logo" onClick={this.props.linkToAll}/>
      				{this.state.name} </div>

            {this.state.location}
            {this.state.weekly}
        <a className="button" href="/" onClick={this.linkToAll}>Back To All</a>
       
       		</div>
        )
    }
}
export default ShowPage;