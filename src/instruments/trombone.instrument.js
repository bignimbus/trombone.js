import Wad from 'web-audio-daw';
import store from '../store/store';

const tromboneInstrument = new Wad({
  source: 'sawtooth',
  pitch: 440,
  env: {
    hold: 120
  }
});

export default tromboneInstrument;
