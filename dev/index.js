import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import MovieListClass from './Class/MovieList';
import OmdbApi from './Class/OmdbApi';
import Movie from './Class/Movie';
import LayoutContainer from './Components';
import Loading from './Components/Layout/other/Loading';
import merge from 'lodash/merge';
import imdbTop250 from './imdb_top250.json';
import 'bootstrap/dist/css/bootstrap.css';

const MovieList = new MovieListClass();
const Omdb = new OmdbApi('9df3a0be');

imdbTop250.forEach(el => {
  const data = {};
  data.getData = () =>
    Omdb.getById(el).then(response => {
      const movieData = new Movie(response, true);
      data.getData = undefined;
      merge(data, movieData);
      return movieData;
    });
  MovieList.add(data);
});

class App extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  listActions = method => (...args) => {
    const result = MovieList[method](...args);
    if (method !== 'isTitleExist') {
      this.setState({ data: MovieList.getOrderedList() });
    }
    return result;
  };

  apiActions = method => (...args) => {
    this.setState({ loading: true });
    return Omdb[method](...args).then(response => {
      this.setState({ loading: false });
      return response;
    });
  };

  loadData = array => {
    this.setState({ loading: true });
    const promises = array.map(el => el.getData && el.getData());
    return Promise.all(promises).then(() => {
      this.setState({ loading: false });
      return array;
    });
  };

  componentDidMount = () => {
    this.setState({
      loading: false,
      data: MovieList.getOrderedList(),
    });
  };

  render = () => (
    <Fragment>
      {this.state.loading && <Loading />}
      <LayoutContainer
        data={this.state.data}
        loading={this.state.loading}
        listActions={this.listActions}
        apiActions={this.apiActions}
        loadData={this.loadData}
      />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
