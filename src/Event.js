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
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
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
