import {createStore, combineReducers} from 'redux';
import pitchReducer from '../reducers/pitch.reducer';
import soundReducer from '../reducers/sound.reducer';

const reducer = combineReducers({pitchReducer, soundReducer});
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
