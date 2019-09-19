export const initial = {
  view: {
    show: false,
    data: null,
  },
  form: {
    show: false,
    data: null,
  },
  prompt: {
    show: false,
    data: null,
  },
};
export const constants = {
  show: 'MODAL_SHOW',
  hide: 'MODAL_HIDE',
};
export const actions = {
  show: (modal, data) => ({ type: constants.show, modal, data }),
  hide: modal => ({ type: constants.hide, modal }),
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case constants.show:
      return {
        ...state,
        [action.modal]: {
          show: true,
          data: action.data,
        },
      };
    case constants.hide:
      return {
        ...state,
        [action.modal]: {
          show: false,
          data: null,
        },
      };
    default:
      return { ...state };
  }
};
