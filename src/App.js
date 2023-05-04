import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import logo from './images/meet_logo_only.png'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
  state = {
    events: [],
    locations: [], 
    numberOfResults: 32,
    showWelcomeScreen: undefined,
    currentPage:0,
    itemsPerPage:32,
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

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
  
  async componentDidMount() {
    this.mounted = true;
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
  this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
    this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
}
  
  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfResults = async (eventCount) => {
    this.setState({ numberOfResults: eventCount });
    const events = await getEvents(eventCount);
    const displayedEvents = events.slice(0, eventCount);
    this.setState({ events: displayedEvents });
  };


  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Meet App</h1>
        <h3>Choose a city near you</h3>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <br></br>
        <NumberOfEvents numberOfResults={this.state.numberOfResults} updateNumberOfResults={this.updateNumberOfResults} />
        <EventList 
          events={this.state.events}
          currentPage={this.state.currentPage}
          setCurrentPage={(page) => this.setState({ currentPage: page })}
          itemsPerPage={this.state.itemsPerPage}
          />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => {getAccessToken()}} />
      </div>
    );
  }
}

export default App;
