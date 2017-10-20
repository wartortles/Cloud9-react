import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    }, () => {
      if (this.state.inputValue.length > 2 || this.state.inputValue.length === 0) {
        this.props.getResults(this.state.inputValue)
      }
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputValue);
    this.props.searchWithInput(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={this.onSubmit}>

          <input type='text' placeholder='search for a location' value={this.state.inputValue} onChange={this.handleChange}/>

        </form>

      </div>
    );
  }

}

export default SearchBar;
