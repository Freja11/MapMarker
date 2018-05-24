import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      places: [],
      showingInfoWindow: false,
      InfoWindowTitle: '',
      visible: true
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      InfoWindowTitle: props.title,
      InfoWindowName: props.name
    });
  }

  componentWillMount() {
    this.getMarkers()
  }

  componentWillUpdate(prevProps, prevState, snapshot) {
    if (prevProps.toggleMarkers !== this.props.toggleMarkers) {
      if(this.state.markers.length === 0) this.getMarkers();
      else {
        this.setState({
          markers: []
        });
      }
    }
  }

  getMarkers() {
    fetch('https://my-json-server.typicode.com/freja11/mapMarker/markers')
    .then(response => response.json())
    .then(markers => this.setState({markers: markers}));
  }


  renderMarkers() {
  return this.state.markers.map(marker => {
      return (
        <Marker onClick={this.onMarkerClick} key={marker.id}
          title = {marker.title}
          name = {marker.name}
          position={marker.position}
        />
      );
    })
  }

  render() {
    return (
      <Map google={this.props.google}
        initialCenter={{
            lat: 43.85572,
            lng: 18.40299
        }}
      zoom={11}>
      {this.renderMarkers()}
      
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.InfoWindowTitle}</h1>
            <p>{this.state.InfoWindowName}</p>
          </div>
      </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAReBJ8T7eBmBEuHaVv50ME6MBnO98kePw')
})(MapContainer)

