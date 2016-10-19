import React, {PropTypes} from 'react';

const Slide = ({position, changePosition}) => (
  <section style={{backgroundColor: 'gray', height: '100px', width: '100%'}} onMouseMove={changePosition} onTouchEnd={changePosition}>
  </section>
);

export default Slide;
