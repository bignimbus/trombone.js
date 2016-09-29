import {createStore, combineReducers} from 'redux';
import slideReducer from '../reducers/slide.reducer.js';
import partialReducer from '../reducers/partial.reducer.js';

const reducer = combineReducers({slideReducer, partialReducer});
const store = createStore(reducer);

export default store;
