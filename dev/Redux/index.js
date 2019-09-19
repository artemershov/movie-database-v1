import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer as dataReducer, initial as dataInitial } from './data';
import { reducer as searchReducer, initial as searchInitial } from './search';
import { reducer as modalReducer, initial as modalInitial } from './modal';
import { reducer as coverReducer, initial as coverInitial } from './cover';
import {
  reducer as loadingReducer,
  initial as loadingInitial,
} from './loading';

const initialState = {
  data: dataInitial,
  search: searchInitial,
  modal: modalInitial,
  cover: coverInitial,
  loading: loadingInitial,
};
const reducers = combineReducers({
  data: dataReducer,
  search: searchReducer,
  form: formReducer,
  modal: modalReducer,
  cover: coverReducer,
  loading: loadingReducer,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, initialState, middleware);

export default store;
