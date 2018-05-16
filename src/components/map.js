import React, {Component} from 'react';
import Markers from './marker';

class Map extends Component {
	componentWillMount() {
		fetch('https://my-json-server.typicode.com/freja11/mapMarker/db')
		.then(res => res.json())
		.then(data => console.log(data));
	}

	render() {
		return (
			<div>
				<h1>Map</h1>
			</div>
		)
	}
}

export default Map;