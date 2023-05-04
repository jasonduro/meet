import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import logo from './images/meet_logo_only.png'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';


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
    console.log("Updating events for location and eventCount:", location, eventCount);
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
      const { numberOfResults } = this.state;
      getEvents(numberOfResults).then((events) => {
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
    console.log("Updating number of results:", eventCount);
    this.setState({ numberOfResults: eventCount });
    const selectedLocation = document.querySelector('.suggestions li.selected')?.textContent || 'all';
    this.updateEvents(selectedLocation, eventCount);
  };
  
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
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
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
            <ResponsiveContainer height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis type="number" dataKey="number" name="# of events" allowDecimals={false} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer >
        </div>
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
