import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;
    return <div className="Event">
        <h1 className="Summary">{event.summary}</h1>
        <p>Event Date</p>
        <p>Event Time</p>
        <p>@ + Event Title</p>
        <p>Event Location</p>
        <button>show details</button>
        <h3>About event:</h3>
        <link>See details on Google Calendar</link>
        <p>Event Description</p>
        <button>hide details</button>
    </div>;
  }
}
export default Event;