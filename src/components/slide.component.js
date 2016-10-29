import React, {PropTypes} from 'react';

const Slide = ({position, changePositionTouch, changePositionMouse}) => (
  <section style={{backgroundColor: 'gray', height: '100px', width: '100%'}} onMouseMove={changePositionMouse} onTouchMove={changePositionTouch}>
  </section>
);

export default Slide;
