import React from 'react';
import {Provider} from 'react-redux';
import Wad from 'web-audio-daw';

import store from './store/store';

import {render} from 'react-dom';

import TromboneContainer from './containers/trombone.container';

import tromboneInstrument from './instruments/trombone.instrument';

store.subscribe(() => {
  let {pitch} = store.getState().pitchReducer;
  if (tromboneInstrument.soundSource) tromboneInstrument.setPitch(pitch);
});

render(
  <Provider store={store}>
    <TromboneContainer />
  </Provider>,
  document.querySelector('#app')
);
