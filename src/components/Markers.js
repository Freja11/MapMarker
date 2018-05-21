import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Markers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: []
		}
	}

	componentWillMount() {
		fetch('https://my-json-server.typicode.com/freja11/mapMarker/markers')
		.then(response => response.json())
		.then(markers => this.setState({markers: markers}));
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
}

export default Markers;