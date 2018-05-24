import {FETCH_MARKERS} from './types';

export const fetchPosts = () => dispatch => {
	fetch('https://my-json-server.typicode.com/freja11/mapMarker/markers')
    .then(response => response.json())
    .then(markers => dispatch({
    	type: FETCH_MARKERS,
    	payload: markers
    });
}