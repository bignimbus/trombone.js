import {getPositionFromXCoord, getPartialFromYCoord} from '../lib/index';

export function changePitch ({x, y}) {
  return {
    type: 'CHANGE_PITCH',
    position: getPositionFromXCoord(x),
    partial: getPartialFromYCoord(y)
  };
}

export function attack () {
  return {
    type: 'ATTACK'
  };
}

export function release () {
  return {
    type: 'RELEASE'
  };
}
