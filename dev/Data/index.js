import OmdbApi from '../Class/OmdbApi';
import MovieListClass from '../Class/MovieList';
import Movie from '../Class/Movie';
import merge from 'lodash/merge';
import imdbTop250 from './imdb_top250.json';

export const MovieList = new MovieListClass();
export const Omdb = new OmdbApi('9df3a0be');

imdbTop250.forEach(id => {
  const data = {};
  data.getData = () =>
    Omdb.getById(id).then(response => {
      const movieData = new Movie(response, true);
      data.getData = undefined;
      merge(data, movieData);
      return movieData;
    });
  MovieList.add(data);
});
