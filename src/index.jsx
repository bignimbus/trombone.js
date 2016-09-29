import React from 'react';
import {Provider} from 'react-redux';

import store from './store/store';

import {render} from 'react-dom';

import TromboneApp from './apps/trombone.app';

render(
  <Provider store={store}>
    <TromboneApp />
  </Provider>,
  document.querySelector('#app')
);

//render(<App/>, document.querySelector('#app'));
