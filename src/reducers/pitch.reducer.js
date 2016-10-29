import {getPitchFromPartialAndPosition, getMidiNoteFromFrequency} from '../lib/index';

const initialState = {
  pitch: 116.54,
  partial: 2,
  position: 1
};

export default function pitchReducer (state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_PITCH':
      let {partial, position} = action;
      let pitch = getPitchFromPartialAndPosition(partial, position);
      let midi = getMidiNoteFromFrequency(pitch);
      return Object.assign({}, state, {partial, position, pitch, midi});
    default:
      return state;
  }
}
