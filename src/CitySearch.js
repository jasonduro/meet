import React, { Component } from 'react';
import InfoAlert from './InfoAlert';


class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'The city name you typed is not found. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText:''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });

    this.props.updateEvents(suggestion);
  }

  toggleSuggestions = () => {
    this.setState((prevState) => ({
      showSuggestions: !prevState.showSuggestions,
    }));
  };

  render() {
    return (
      <>
      <InfoAlert text={this.state.infoText} />
      <div className="CitySearch">
        <div className="citysearch-input-container">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
          placeholder="Click here to type in your city"
        />
        <i
          className="fa fa-chevron-down"
          onClick={this.toggleSuggestions}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        />
        </div>
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none'}}>
          {this.state.suggestions.map((suggestions) => (
            <li 
              key={suggestions}
              onClick={() => this.handleItemClicked(suggestions)}
              >{suggestions}</li>
          ))}
          <li onClick={() => this.handleItemClicked("all")} >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
      </>
    );
  }
}

export default CitySearch;