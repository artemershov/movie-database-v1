import React from 'react';
import Formsy from 'formsy-react';

const Form = props => (
  <Formsy
    onValid={props.onValid}
    onInvalid={props.onInvalid}
    onValidSubmit={props.submit}>
    {props.children}
  </Formsy>
);

export default Form;
