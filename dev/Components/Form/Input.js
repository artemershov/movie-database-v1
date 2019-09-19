import React from 'react';
import { withFormsy } from 'formsy-react';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import InputBootsrap from 'reactstrap/lib/Input';
import FormFeedback from 'reactstrap/lib/FormFeedback';

class Input extends React.Component {
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
        <InputBootsrap
          type={this.props.type}
          valid={valid}
          invalid={touched && !valid}
          onChange={this.onChange}
          value={this.props.getValue() || ''}
          placeholder={this.props.placeholder}
          max={this.props.max}
          min={this.props.min}
          step={this.props.step}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
        />
        {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
      </FormGroup>
    );
  };
}

export default withFormsy(Input);
