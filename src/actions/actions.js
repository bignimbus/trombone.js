export const changePosition = position => {
  return {
    type: 'CHANGE_POSITION',
    position
  };
};

export const changePartial = partial => {
  return {
    type: 'CHANGE_PARTIAL',
    partial
  };
};
