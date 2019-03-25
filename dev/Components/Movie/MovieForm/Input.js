import React from 'react';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import InputBS from 'reactstrap/lib/Input';
import FormFeedback from 'reactstrap/lib/FormFeedback';

export const Input = ({
  label,
  meta: { touched, error },
  input,
  type,
  ...rest
}) => (
  <FormGroup className="mb-3">
    {label && <Label className="small mb-0">{label}</Label>}
    <InputBS
      type={type}
      valid={touched && !error}
      invalid={Boolean(touched && error)}
      {...input}
      {...rest}
    />
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

export const Checkbox = ({
  label,
  meta: { touched, error },
  input,
  ...rest
}) => (
  <FormGroup className="mb-3">
    <Label check>
      <InputBS
        type="checkbox"
        valid={touched && !error}
        invalid={Boolean(touched && error)}
        {...input}
        {...rest}
      />{' '}
      {label}
    </Label>
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

export const Select = ({
  label,
  meta: { touched, error },
  input,
  children,
  ...rest
}) => (
  <FormGroup className="mb-3">
    {label && <Label className="small mb-0">{label}</Label>}
    <InputBS
      type="select"
      valid={touched && !error}
      invalid={Boolean(touched && error)}
      {...input}
      {...rest}>
      {children}
    </InputBS>
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);
