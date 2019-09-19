import { addValidationRule } from 'formsy-react';

addValidationRule('isTitle', (values, value) => {
  const re = new RegExp(/[^\d\w\s-]/);
  return !re.test(value);
});

addValidationRule('isText', (values, value) => {
  const re = new RegExp(/[^\d\w\s!?;:,.'"`\-=+/\\()*#&%$]/);
  return !re.test(value);
});

addValidationRule('notEmpty', (values, value) => {
  return value && !!value.trim();
});

addValidationRule('numBetween', (values, value, array) => {
  return value >= array[0] && value <= array[1];
});

const errorMessages = {
  required: 'The value is required',
  length200: 'Maximum length 200 characters',
  length2000: 'Maximum length 2000 characters',
  isTitle: 'Only latin characters are allowed',
  isValidTitle: 'A movie with this title already exists. Choose another title.',
  isText: 'Only latin characters, numbers and punctuation marks are allowed',
  isUrl: 'Value must be a valid URL',
  isNumeric: 'Only numeric values are allowed',
  year: 'Year must be between 1895 and ' + (new Date().getFullYear() + 10),
  rating: 'Rating must be between 0 and 10',
  runtime: 'Runtime should not exceed 10 hours and be at least 1 minute',
};

export default errorMessages;
