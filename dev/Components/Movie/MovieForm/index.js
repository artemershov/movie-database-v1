import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { actions as dataActions } from '../../../Redux/data';
import actions from '../../../Redux/app';
import { RowXS, RowSM } from '../../Layout/other/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import Poster from '../Poster';
import { Input } from './Input';
import validate from './validation';

class MovieForm extends React.Component {
  submit = model => {
    const { data, dispatch } = this.props;
    Object.keys(model).forEach(key => {
      if (typeof model[key] == 'string') {
        model[key] = model[key].replace(/\s+/g, ' ').trim();
      }
    });
    if (data) {
      dispatch(dataActions.edit(data.id, model));
      dispatch(actions.view({ id: data.id, ...model }));
    } else {
      dispatch(dataActions.add(model));
      const id = this.props.lastId;
      dispatch(actions.view({ id, ...model }));
    }
  };

  componentDidMount = () => {
    if (this.props.data) this.props.initialize(this.props.data);
  };

  render = () => {
    const { handleSubmit, formValues } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <RowSM>
          <Col xs="12" sm="4">
            <Poster className="mb-3" src={formValues && formValues.poster} />
          </Col>
          <Col xs="12" sm="8">
            <RowXS>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="title"
                  label="Title"
                />
              </Col>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="poster"
                  label="Poster url"
                />
              </Col>
            </RowXS>
            <Field component={Input} type="textarea" name="plot" label="Plot" />
            <RowXS>
              <Col xs="12" sm="6" lg="3">
                <Field
                  component={Input}
                  type="number"
                  name="imdbRating"
                  label="Rating"
                  step="0.1"
                />
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Field
                  component={Input}
                  type="number"
                  name="year"
                  label="Year"
                />
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Field
                  component={Input}
                  type="number"
                  name="runtime"
                  label="Runtime (min.)"
                />
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Field
                  component={Input}
                  type="text"
                  name="genre"
                  label="Genre"
                />
              </Col>
            </RowXS>
            <RowXS>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="production"
                  label="Production"
                />
              </Col>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="country"
                  label="Country"
                />
              </Col>
            </RowXS>
            <RowXS>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="director"
                  label="Director"
                />
              </Col>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="writer"
                  label="Writer"
                />
              </Col>
            </RowXS>
            <RowXS>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="actors"
                  label="Actors"
                />
              </Col>
              <Col xs="12" sm="6">
                <Field
                  component={Input}
                  type="text"
                  name="awards"
                  label="Awards"
                />
              </Col>
            </RowXS>
            <div className="text-right">
              {this.props.cancel && (
                <Button
                  className="ml-2"
                  color="dark"
                  outline
                  onClick={this.props.cancel}>
                  Cancel
                </Button>
              )}
              <Button className="ml-2" color="dark" outline>
                Submit
              </Button>
            </div>
          </Col>
        </RowSM>
      </form>
    );
  };
}

const mapState = state => ({
  data: state.modal.form.data,
  movies: state.data.list,
  lastId: state.data.lastId,
  formValues: getFormValues('MovieForm')(state),
});
export default connect(mapState)(
  reduxForm({
    form: 'MovieForm',
    touchOnBlur: false,
    validate,
  })(MovieForm)
);
