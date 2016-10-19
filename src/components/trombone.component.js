import React, {PropTypes} from 'react';
import Slide from './slide.component';
import Partial from './partial.component';

const Trombone = ({position, partial, changePartial, changePosition}) => (
  <section>
    <Partial partial={partial} changePartial={changePartial} />
    <Slide position={position} changePosition={changePosition} />
  </section>
);

export default Trombone;
