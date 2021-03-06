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
          <h1 className="App-title">Genijalno.ba + Google Maps</h1>
          <ToggleMarkers handleClick={this.clickie.bind(this)} />
        </header>
        <div className="App-intro">
          <MapComponent toggleMarkers={this.state.showMarkers} />
        </div>
        
      </div>
    );
  }
}

export default App;
