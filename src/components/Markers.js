import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MarkerComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: []
		}
	}

	componentWillMount() {
		fetch('https://my-json-server.typicode.com/freja11/mapMarker/markers')
		.then(response => response.json())
		.then(markers => this.setState({markers}));
	}

	renderMarkers() {
    return this.state.markers.map(marker => {
      return (
        <div key={marker.id}>
        	<p>{marker.title}</p>
        </div>
      );
    })
  }
	render() {
		
		return (
			<div>
				<h1>Markers</h1>
				{this.renderMarkers()}
			</div>
		)
	}
}

export default MarkerComponent;