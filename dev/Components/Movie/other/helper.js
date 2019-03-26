import startCase from 'lodash/startCase';

export const filterTitle = str =>
  str &&
  startCase(
    str
      .toLowerCase()
      .replace(/[^\d\w\s-]/, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
