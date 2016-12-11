import React from 'react';
import {connect} from 'react-redux';
import {changePitch, attack, release} from '../actions/actions';
import Wrapper from '../components/wrapper.component';

const mapStateToProps = store => {
  let {pitch, position, partial} = store.pitchReducer;
  return {pitch, position, partial};
};

// TODO bring viewport calc into utility module
const mapDispatchToProps = dispatch => {
  return {
    attack () {
      dispatch(attack());
    },
    release () {
      dispatch(release());
    },
    changeCoords (media, event) {
      let {bottom, left, right, top} = event.target.getBoundingClientRect();

      if (media === 'touch') event = event.touches[0];

      let {clientX, clientY} = event;

      dispatch(changePitch({
        x: 100 * (clientX - left) / right,
        y: 100 * (clientY - top) / bottom
      }));
    }
  }
};

const WrapperContainer = connect(mapStateToProps, mapDispatchToProps)(Wrapper);

export default WrapperContainer;
