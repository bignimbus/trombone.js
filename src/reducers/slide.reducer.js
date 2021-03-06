const initialState = {
  position: 1
};

export default function slideReducer (state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_POSITION':
      return Object.assign({}, state, {position: action.position});
    default:
      return state;
  }
}
