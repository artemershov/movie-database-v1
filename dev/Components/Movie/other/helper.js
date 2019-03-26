import startCase from 'lodash/startCase';

export const filterTitle = str =>
  str &&
  startCase(
    str
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s-]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
