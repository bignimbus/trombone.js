import React from 'react';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import slideReducer from './reducers/reducers';

import {render} from 'react-dom';

import TromboneApp from './apps/trombone.app';

const reducer = combineReducers({slideReducer});
const store = createStore(reducer);

render(
  <Provider store={store}>
    <TromboneApp />
  </Provider>,
  document.querySelector('#app')
);

//render(<App/>, document.querySelector('#app'));
