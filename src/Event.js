import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  };

  handleDetailsClick = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    const { event } = this.props;
    const startTime = new Date(event.start.dateTime).toLocaleString();
    const endTime = new Date(event.end.dateTime).toLocaleString();
    const timeZone = event.start.timeZone;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <p>Start: {startTime}</p>
        <p>End: {endTime}</p>
        <p>Timezone: {timeZone}</p>
        <p>Location: {event.location}</p>
        {showDetails && (
          <div className="eventDetails">
            <p>{event.description}</p>
          </div>
        )}
        <button className="detailsButton" onClick={this.handleDetailsClick}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    );
  }
}

export default Event;
