import startCase from 'lodash/startCase';

export default class Movie {
  constructor(data, omdb = false) {
    if (omdb) data = omdbToMovieObj(data);

    this.title = data.title;
    this.poster = data.poster;
    this.year = data.year;
    this.imdbID = data.imdbID || null;

    this.runtime = data.runtime;
    this.genre = data.genre;
    this.director = data.director;
    this.writer = data.writer;
    this.actors = data.actors;
    this.plot = data.plot;
    this.country = data.country;
    this.awards = data.awards;
    this.imdbRating = data.imdbRating;
    this.production = data.production;
  }
}
const omdbToMovieObj = data => ({
  title: startCase(data.Title),
  poster: data.Poster.replace('SX300', 'SX800'),
  year: data.Year,
  imdbID: data.imdbID,

  runtime: (data.Runtime && parseInt(data.Runtime)) || null,
  genre: data.Genre || null,
  director: data.Director || null,
  writer: data.Writer || null,
  actors: data.Actors || null,
  plot: data.Plot || null,
  country: data.Country || null,
  awards: data.Awards || null,
  imdbRating: data.imdbRating || null,
  production: data.Production || null,
});

export { omdbToMovieObj };
