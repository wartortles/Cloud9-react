import React, { Component } from 'react';

class ShowPage extends Component {

  constructor(props) {
  	super(props)

  }
render() {
	return(
		<div>
		<h1>ID PAGE</h1>
		<a className="button" href="/" onClick={this.linkToAll}>Back To All</a>
		</div>


		)
	}
}

export default ShowPage;