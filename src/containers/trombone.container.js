import React from 'react';
import {connect} from 'react-redux';
import {changePosition, changePartial} from '../actions/actions';
import Trombone from '../components/trombone.component';

const mapStateToProps = store => {
  return {
    position: store.slideReducer.position,
    partial: store.partialReducer.partial
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePartial(e) {
      dispatch(changePartial(e.target.value));
    },
    changePosition(e) {
      console.log(e.touches, e.changedTouches, e.targetTouches);
      //dispatch(changePosition(e.target.value));
    }
  }
};

const TromboneContainer = connect(mapStateToProps, mapDispatchToProps)(Trombone);

export default TromboneContainer;
