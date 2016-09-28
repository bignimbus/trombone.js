import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import {reducers} from './reducers/reducers';

import {render} from 'react-dom';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <TromboneApp />}
        </Provider>
        {render(store)}
      </div>
    );
  }
}

render(<App/>, document.querySelector('#app'));
