export const initial = null;
export const constants = { set: 'COVER_SET_BG' };
export const actions = { set: url => ({ type: constants.set, url }) };
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case constants.set:
      return action.url;
    default:
      return state;
  }
};
