import React from 'react';
import {connect} from 'react-redux';

import Trombone from '../components/trombone.component';

function mapStateToProps (store) {
  let {svgX} = store.pitchReducer;
  return {svgX};
}

const TromboneContainer = connect(mapStateToProps)(Trombone);

export default TromboneContainer;
