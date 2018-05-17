import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

import MarkerComponent from './Markers';


export class MapContainer extends Component {

    constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }



  render() {
    return (
      <Map google={this.props.google}
        initialCenter={{
            lat: 43.85572,
            lng: 18.40299
        }}
      zoom={12}>
      <MarkerComponent />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAReBJ8T7eBmBEuHaVv50ME6MBnO98kePw')
})(MapContainer)

