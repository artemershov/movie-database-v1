import React from 'react';
import { withFormsy } from 'formsy-react';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import FormFeedback from 'reactstrap/lib/FormFeedback';

class Checkbox extends React.Component {
  onChange = e => this.props.setValue(e.currentTarget.checked);
  render = () => {
    const isRequired = this.props.isRequired();
    const errorMessage =
      this.props.getErrorMessage() ||
      (isRequired && this.props.validationError);
    const valid = this.props.isValid();
    const touched = !this.props.isPristine();
    return (
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            valid={valid}
            invalid={touched && !valid}
            onChange={this.onChange}
            checked={this.props.getValue() || false}
          />{' '}
          {this.props.label}
          {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
        </Label>
      </FormGroup>
    );
  };
}

export default withFormsy(Checkbox);
