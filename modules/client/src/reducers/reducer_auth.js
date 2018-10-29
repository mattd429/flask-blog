// Types
import { 
    AUTH_USER, 
    NONAUTH_USER, 
    AUTH_ERROR, 
    FETCH_MESSAGE 
} from '../actions/types';

export default function(state={}, action) {
    // eslint-disable-next-line
    switch(action.type) {
	case AUTH_USER:
	    return {...state, error: '', authenticated: true };
	case NONAUTH_USER:
	    return {...state, error: '', authenticated: false };
	case AUTH_ERROR:
	    return {...state, error: action.payload };
	case FETCH_MESSAGE:
	    return {...state, message: action.payload };
    }

    return state;
}