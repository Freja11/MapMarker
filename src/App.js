import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import MapComponent from './components/Map'; 
import ToggleMarkers from './components/ToggleMarkers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMarkers: true
    }
  }

  clickie() {
    var toggled = !this.state.showMarkers;
    this.setState({
      showMarkers: toggled
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Google Maps</h1>
        </header>
        <ToggleMarkers handleClick={this.clickie.bind(this)} />
        <MapComponent toggleMarkers={this.state.showMarkers} />
      </div>
    );
  }
}

export default App;
