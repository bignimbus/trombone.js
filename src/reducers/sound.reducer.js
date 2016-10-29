import tromboneInstrument from '../instruments/trombone.instrument';

const initialState = {
  playing: false
};

export default function soundReducer (state = initialState, action = {}) {
  switch(action.type) {
    case 'ATTACK':
      if (!state.playing) tromboneInstrument.play();
      return Object.assign({}, state, {playing: true});
    case 'RELEASE':
      if (state.playing) tromboneInstrument.stop();
      return Object.assign({}, state, {playing: false});
    default:
      return state;
  }
}
