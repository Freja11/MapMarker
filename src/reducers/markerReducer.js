import {FETCH_MARKERS} from '../actions/types';

const initialState = {
	markers: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_MARKERS:
		return {
			...state,
			markers: action.payload
		};
		
		default:
			return state;
	}