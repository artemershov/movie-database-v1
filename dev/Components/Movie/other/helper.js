import startCase from 'lodash/startCase';

export const formatTitle = str =>
  str &&
  startCase(
    str
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s-]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );