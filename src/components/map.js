import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

import MarkerComponent from './Markers';

export class MapContainer extends Component {

    constructor(props) {
    super(props);
    this.state = {
      markers: [
        {"id": 1,"title": "Sarajevo", name: "Something", position: { lat: 43.85572, lng: 18.40299}},
        {"id": 2,"title": "Dobrinja", name: "Something", position: { lat: 43.823883, lng: 18.353798}},
        {"id": 3,"title": "Bojnik", name: "Something", position: { lat: 43.873556, lng: 18.277475}},
        {"id": 4,"title": "Bojnik", name: "Something", position: { lat: 43.878556, lng: 18.277475}},
      ]
    }
  }

  renderMarkers() {
    return this.state.markers.map(marker => {
      return (
        <Marker key={marker.id}
          title = {marker.title}
          name={marker.name}
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
      zoom={12}>
      {this.renderMarkers()}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAReBJ8T7eBmBEuHaVv50ME6MBnO98kePw')
})(MapContainer)

