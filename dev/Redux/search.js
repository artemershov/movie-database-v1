export const initial = {
  query: '',
  data: null,
};
export const constants = {
  query: 'SEARCH_QUERY',
  data: 'SEARCH_DATA',
};
export const actions = {
  query: query => ({ type: constants.query, query }),
  data: data => ({ type: constants.data, data }),
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case constants.query: {
      return {
        ...state,
        query: action.query,
      };
    }
    case constants.data: {
      return {
        ...state,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
