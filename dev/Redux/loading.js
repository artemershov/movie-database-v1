export const initial = true;
export const constants = { set: 'LOADING' };
export const actions = { set: state => ({ type: constants.set, state }) };
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case constants.set:
      return action.state;
    default:
      return state;
  }
};
