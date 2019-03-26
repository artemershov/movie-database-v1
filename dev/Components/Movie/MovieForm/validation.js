import { filterTitle } from '../other/helper';

// const titleRegExp = new RegExp(/^[\d\w\s-]+$/);
const textRegExp = new RegExp(/^[\d\w\s!?;:,.'"`\-=+/\\()*#&%$]+$/);
const numberRegExp = new RegExp(/^\d+$/);
const floatRegExp = new RegExp(/^\d+([.,]\d+)?$/);
const urlRegExp = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
);

export default (values, props) => {
  const errors = {};

  const requiredFields = [
    'title',
    'poster',
    'plot',
    'imdbRating',
    'year',
    'runtime',
    'genre',
    'production',
    'country',
    'director',
    'writer',
    'actors',
    'awards',
  ];
  requiredFields.forEach(name => {
    if (!values[name]) {
      errors[name] = 'The value is required';
    }
  });

  // if (values.title && !titleRegExp.test(values.title)) {
  //   errors.title = 'Only latin characters are allowed';
  // }

  const textFields = [
    'plot',
    'genre',
    'production',
    'country',
    'director',
    'writer',
    'actors',
    'awards',
  ];
  textFields.forEach(name => {
    if (values[name] && !textRegExp.test(values[name])) {
      errors[name] =
        'Only latin characters, numbers and punctuation marks are allowed';
    }
  });

  const numericFields = ['runtime', 'year'];
  numericFields.forEach(name => {
    if (values[name] && !numberRegExp.test(values[name])) {
      errors[name] = 'Only numeric values are allowed';
    }
  });

  if (values.imdbRating && !floatRegExp.test(values.imdbRating)) {
    errors.imdbRating = 'Only numeric values are allowed';
  }

  const maxLengthCheckFields = [
    'title',
    'genre',
    'production',
    'country',
    'director',
    'writer',
    'actors',
    'awards',
  ];
  maxLengthCheckFields.forEach(name => {
    if (values[name] && values[name].trim().length > 200) {
      errors[name] = 'Maximum length 200 characters';
    }
  });

  if (values.plot && values.plot.trim().length > 2000) {
    errors.plot = 'Maximum length 2000 characters';
  }

  if (values.poster && !urlRegExp.test(values.poster)) {
    errors.poster = 'Value must be a valid URL';
  }

  if (values.imdbRating && (values.imdbRating < 0 || values.imdbRating > 10)) {
    errors.imdbRating = 'Rating must be between 0 and 10';
  }

  if (values.runtime && (values.runtime < 1 || values.runtime > 600)) {
    errors.runtime =
      'Runtime should not exceed 10 hours and be at least 1 minute';
  }

  if (
    values.year &&
    (values.year < 1895 || values.year > new Date().getFullYear() + 10)
  ) {
    errors.year = `Year must be between 1895 and ${new Date().getFullYear() +
      10}`;
  }

  if (values.title && props.movies) {
    const title = filterTitle(values.title);
    if (
      props.movies.some(movie => filterTitle(movie.title) == title) &&
      !(props.data && props.data.title == title)
    ) {
      errors.title =
        'A movie with this title already exists. Choose another title.';
    }
  }

  return errors;
};
