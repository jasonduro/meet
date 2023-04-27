import React, { Component } from 'react';

class NumberOfEvents extends Component {
  static defaultProps = {
    numberOfResults: 32,
  };

  state = {
    numberOfEvents: this.props.numberOfResults,
  }

  handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    this.setState({ numberOfEvents: value });
    this.props.updateNumberOfResults(value); // Call the updateNumberOfResults function passed from App.js
  }

  render() {
    return (
      <div className="number-of-events">
        <label htmlFor="event-number-input">Number of Events: </label>
        <input
          type="number"
          className="event-number-input"
          id="event-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
          placeholder="Enter number of events"
        />
      </div>
    );
  }
}

export default NumberOfEvents;
