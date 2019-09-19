import React from 'react';
import { withFormsy } from 'formsy-react';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import FormFeedback from 'reactstrap/lib/FormFeedback';

class Select extends React.Component {
  onChange = e => this.props.setValue(e.currentTarget.value);
  render = () => {
    const isRequired = this.props.isRequired();
    const errorMessage =
      this.props.getErrorMessage() ||
      (isRequired && this.props.validationError);
    const valid = this.props.isValid();
    const touched = !this.props.isPristine();
    return (
      <FormGroup className="mb-3">
        <Label className="small mb-0">{this.props.label}</Label>
        <Input
          type="select"
          valid={valid}
          invalid={touched && !valid}
          onChange={this.onChange}
          value={this.props.getValue() || ''}>
          {this.props.children}
        </Input>
        {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
      </FormGroup>
    );
  };
}

export default withFormsy(Select);
