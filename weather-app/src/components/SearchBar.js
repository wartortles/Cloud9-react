import React, {Component} from 'react';
import magnifyingGlass from '../images/magnifying-glass.png'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  // controlled input
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
  // submitting instead of clicking a result
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
        <form className='search-form' onSubmit={this.onSubmit}>
          <input className='search-bar' type='text' placeholder='search for a location' value={this.state.inputValue} onChange={this.handleChange}/>

        </form>

      </div>
    );
  }

}

export default SearchBar;
