import React from 'react';
import {Provider} from 'react-redux';
import Wad from 'web-audio-daw';

import store from './store/store';

import {render} from 'react-dom';

import WrapperContainer from './containers/wrapper.container';

import tromboneInstrument from './instruments/trombone.instrument';

store.subscribe(() => {
  let {pitch} = store.getState().pitchReducer;
  tromboneInstrument.setPitch(pitch);
});

render(
  <Provider store={store}>
    <WrapperContainer />
  </Provider>,
  document.querySelector('#app')
);
