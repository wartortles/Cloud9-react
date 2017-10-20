import React, { Component } from 'react';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const placeId = event.target.dataset.placeid;
    const name = event.target.dataset.text;
    this.props.saveLocation(placeId, name);
    console.log(name, placeId);
  }

  render() {
    console.log(this.props.results);
    return (
      <div>
        {this.props.results.map((result, i) =>
          <div href='/'
            key={i}
            className='search-result'
            onClick={this.onClick}
            data-text={result.description}
            data-placeid={result.placeId}>
            {result.description}<br/>
          </div>
        )}
      </div>
    );
  }

}

export default SearchResults;
