import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
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
