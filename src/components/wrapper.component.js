import React, {PropTypes} from 'react';
import {pipe} from 'lodash/fp';

import Trombone from './trombone.component';

const styles = {
  background: 'lightsalmon',
  height: '100vh',
  position: 'relative',
  width: '100vw'
};

function Wrapper ({changeCoords, attack, release}) {
  return (
    <section
      onMouseMove={changeCoords.bind(null, 'mouse')}
      onTouchMove={changeCoords.bind(null, 'touch')}
      onMouseDown={pipe(changeCoords.bind(null, 'mouse'), attack)}
      onMouseUp={release}
      onTouchStart={pipe(changeCoords.bind(null, 'touch'), attack)}
      onTouchEnd={release}
      style={styles}
    >
      <Trombone />
    </section>
  );
}

Wrapper.propTypes = {
  changeCoords: PropTypes.func.isRequired,
  attack: PropTypes.func.isRequired,
  release: PropTypes.func.isRequired
};

export default Wrapper;
