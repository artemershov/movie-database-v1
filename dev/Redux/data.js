import Movie from '../Class/Movie';
import { MovieList } from '../Data';

export const initial = {
  list: MovieList.getOrderedList(),
  lastId: MovieList.getLastId(),
};
export const constants = {
  get: 'DATA_GET',
  add: 'DATA_ADD',
  edit: 'DATA_EDIT',
  remove: 'DATA_REMOVE',
};
export const actions = {
  get: () => ({ type: constants.get }),
  add: data => ({ type: constants.add, data }),
  edit: (id, data) => ({ type: constants.edit, id, data }),
  remove: id => ({ type: constants.remove, id }),
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case constants.get:
      return {
        ...state,
        list: MovieList.getOrderedList(),
      };
    case constants.add:
      MovieList.add(new Movie(action.data));
      return {
        list: MovieList.getOrderedList(),
        lastId: MovieList.getLastId(),
      };
    case constants.edit:
      MovieList.edit(action.id, action.data);
      return {
        ...state,
        list: MovieList.getOrderedList(),
      };
    case constants.remove:
      MovieList.remove(action.id);
      return {
        ...state,
        list: MovieList.getOrderedList(),
      };
    default:
      return state;
  }
};
