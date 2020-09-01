import loggedReducer from './logged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: loggedReducer
});

export default allReducers;