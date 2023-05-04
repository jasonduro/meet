import React, { Component } from 'react';
import ErrorAlert from './ErrorAlert'; 

class NumberOfEvents extends Component {
  static defaultProps = {
    numberOfResults: 32,
  };

  state = {
    numberOfEvents: this.props.numberOfResults,
  }
  handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      return;
    }
    if (value > 32) {
      this.setState({
        errorText: 'Number should be less than 32',
      });
      return;
    }
    if (value < 1) {
      this.setState({
        errorText: 'Number should be at least 1',
      });
    } else {
      this.setState({
        errorText: '',
      });
    }
    this.setState({ numberOfEvents: value });
    this.props.updateNumberOfResults(value); // Call the updateNumberOfResults function passed from App.js
  };
  

  render() {
    return (
      <div className="number-of-events">
        <label htmlFor="event-number-input">Number of Events: </label>
        <input
          type="number"
          className="event-number-input"
          id="event-number-input"
          value={this.state.numberOfResults}
          onChange={this.handleInputChange}
          placeholder="Enter number of events"
        />
      <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
