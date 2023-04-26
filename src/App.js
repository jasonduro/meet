import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [], 
    numberOfResults: 32,
  }

  updateEvents = (location, eventCount) => {
    const { numberOfResults } = this.state;
  
    getEvents(eventCount || numberOfResults).then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  
  componentDidMount() {
    this.mounted = true;
    getEvents(this.state.numberOfResults).then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  
  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfResults = async (eventCount) => {
    this.setState({ numberOfResults: eventCount });
    const events = await getEvents();
    const displayedEvents = events.slice(0, eventCount);
    this.setState({ events: displayedEvents });
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfResults={this.state.numberOfResults} updateNumberOfResults={this.updateNumberOfResults} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
