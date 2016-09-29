import React, {PropTypes} from 'react';

const Trombone = ({position, partial, changePartial, changePosition}) => (
  <form>
    <section>
      <label htmlFor="partial">Partial - {partial}</label>
      <input type="range" id="partial" name="partial"
        min="0"
        max="10"
        value={partial}
        onChange={e => changePartial(e)}
      />
    </section>
    <section>
      <label htmlFor="slide">Slide Position - {position}</label>
      <input type="range" id="slide" name="slide"
        min="0"
        max="6"
        value={position}
        onChange={e => changePosition(e)}
      />
    </section>
  </form>
);

export default Trombone;
