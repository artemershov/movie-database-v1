import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux';
import Layout from './Components';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#app'));
