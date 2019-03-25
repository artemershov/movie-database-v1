import { Omdb } from '../Data';
import Movie from '../Class/Movie';
import { actions as dataActions } from './data';
import { actions as searchActions } from './search';
import { actions as modalActions } from './modal';
import { actions as loadingActions } from './loading';

const actions = {
  view: (data, load = false) => dispatch => {
    dispatch(modalActions.hide('form'));
    dispatch(modalActions.hide('prompt'));
    if (load) {
      dispatch(loadingActions.set(true));
      Omdb.getById(data.imdbID).then(data => {
        dispatch(loadingActions.set(false));
        dispatch(modalActions.show('view', new Movie(data, true)));
      });
    } else {
      dispatch(modalActions.show('view', data));
    }
  },
  edit: data => dispatch => {
    dispatch(modalActions.hide('view'));
    dispatch(modalActions.hide('prompt'));
    dispatch(modalActions.show('form', data));
  },
  remove: id => dispatch => {
    new Promise((resolve, reject) => {
      dispatch(modalActions.hide('view'));
      dispatch(modalActions.hide('form'));
      dispatch(modalActions.show('prompt', { resolve, reject }));
    })
      .then(() => dispatch(dataActions.remove(id)), () => {})
      .finally(() => dispatch(modalActions.hide('prompt')));
  },
  search: query => dispatch => {
    dispatch(searchActions.query(query));
    if (query) {
      // dispatch(loadingActions.set(true));
      Omdb.search(query).then(data => {
        // dispatch(loadingActions.set(false));
        if (data.Response && data.Search) {
          const movies = data.Search.map(el => new Movie(el, true));
          dispatch(searchActions.data(movies));
        }
      });
    } else {
      dispatch(searchActions.data(null));
    }
  },
};

export default actions;
