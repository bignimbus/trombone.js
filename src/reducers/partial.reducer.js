const initialState = {
  partial: 0
};

export default function partialReducer (state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_PARTIAL':
      return Object.assign({}, state, {partial: action.partial});
    default:
      return state;
  }
}
