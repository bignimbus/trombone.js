import React from 'react';
import {Provider} from 'react-redux';

import store from './store/store';

import {render} from 'react-dom';

import TromboneContainer from './containers/trombone.container';

render(
  <Provider store={store}>
    <TromboneContainer />
  </Provider>,
  document.querySelector('#app')
);

//render(<App/>, document.querySelector('#app'));
