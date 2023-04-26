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

  updateEvents = (location, numberOfResults) => {
    
    getEvents(numberOfResults).then((events) => {
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

  updateNumberOfResults = (numberOfResults) => {
    this.setState({ numberOfResults });
    this.updateEvents(this.state.selectedLocation, numberOfResults);
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfResults={this.updateNumberOfResults} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
