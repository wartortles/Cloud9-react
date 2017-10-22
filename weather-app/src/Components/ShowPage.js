import React, {Component} from 'react';
import axios from 'axios';

class ShowPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      location: []
    }

  }

  componentDidMount() {
    //console.log("THIS DID MOUNT!");
    axios.get(`http://localhost:8080/weather/${this.props.id}`).then(response => {
      console.log(`Mount: `, response.data)

      const icon = response.data.weather.currently.icon;
      const temp = Math.round(response.data.weather.currently.temperature);
      const high = Math.round(response.data.weather.daily.data[0].temperatureHigh);
      const low = Math.round(response.data.weather.daily.data[0].temperatureLow);
      const name = response.data.location.name
      const result = (
        <div data-id={response.data.location.id} onClick={this.onClick}>
          <h3 data-id={response.data.location.id}>{name}</h3>
          <p data-id={response.data.location.id}>{icon}</p>
          <p data-id={response.data.location.id}>{temp}</p>
          <p data-id={response.data.location.id}>{low}</p>
          <p data-id={response.data.location.id}>{high}</p>
        </div>
      )

      //console.log(result);

      this.setState({location: result})
    });
  }

  render() {
    return (
      <div>
        <h1>ID PAGE</h1>
        {this.state.location}
        <a className="button" href="/" onClick={this.linkToAll}>Back To All</a>
      </div>

    )
  }
}

export default ShowPage;
