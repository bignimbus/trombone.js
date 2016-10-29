import React, {PropTypes} from 'react';
import Slide from './slide.component';
import Partial from './partial.component';
import {pipe} from 'lodash/fp';

const styles = {
  background: 'lightsalmon',
  height: '100vh',
  position: 'relative',
  width: '100vw'
};

const Trombone = ({changeCoords, attack, release}) => (
  <section
    onMouseMove={changeCoords.bind(null, 'mouse')}
    onTouchMove={changeCoords.bind(null, 'touch')}
    onMouseDown={pipe(changeCoords.bind(null, 'mouse'), attack)}
    onMouseUp={release}
    onTouchStart={pipe(changeCoords.bind(null, 'touch'), attack)}
    onTouchEnd={release}
    style={styles}
  >
  </section>
);

Trombone.propTypes = {
};

export default Trombone;
