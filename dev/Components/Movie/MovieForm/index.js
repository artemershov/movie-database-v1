import React from 'react';
import { connect } from 'react-redux';
import { actions as dataActions } from '../../../Redux/data';
import actions from '../../../Redux/app';
import { RowXS, RowSM } from '../../Layout/other/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import Poster from '../Poster';
import Form from '../../Form';
import Input from '../../Form/Input';
import errorMessages from './validation';

class MovieForm extends React.Component {
  state = { valid: false };

  posterInput = React.createRef();
  posterValue = () =>
    this.posterInput.current && this.posterInput.current.getValue();

  onValid = () => this.setState({ valid: true });
  onInvalid = () => this.setState({ valid: false });

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

  render = () => {
    const { data, list } = this.props;
    return (
      <Form
        submit={this.submit}
        onValid={this.onValid}
        onInvalid={this.onInvalid}>
        <RowSM>
          <Col xs="12" sm="4">
            <Poster className="mb-3" src={this.posterValue()} />
          </Col>
          <Col xs="12" sm="8">
            <RowXS>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="title"
                  value={data && data.title}
                  label="Title"
                  validations={{
                    notEmpty: true,
                    maxLength: 200,
                    isValidTitle: { title: data && data.title, list },
                  }}
                  validationError={errorMessages.required}
                  validationErrors={{
                    isValidTitle: errorMessages.isValidTitle,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="poster"
                  value={data && data.poster}
                  label="Poster url"
                  validations="isUrl"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isUrl: errorMessages.isUrl,
                  }}
                  ref={this.posterInput}
                  required
                />
              </Col>
            </RowXS>
            <Input
              type="textarea"
              name="plot"
              value={data && data.plot}
              label="Plot"
              validations="isText,notEmpty,maxLength:2000"
              validationError={errorMessages.required}
              validationErrors={{
                isText: errorMessages.isText,
                maxLength: errorMessages.length2000,
              }}
              required
            />
            <RowXS>
              <Col xs="12" sm="6" lg="3">
                <Input
                  type="number"
                  name="imdbRating"
                  value={data && data.imdbRating}
                  label="Rating"
                  validations="isNumeric,numBetween:[0,10]"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isNumeric: errorMessages.isNumeric,
                    numBetween: errorMessages.rating,
                  }}
                  step="0.1"
                  required
                />
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Input
                  type="number"
                  name="year"
                  value={data && data.year}
                  label="Year"
                  validations={{
                    isNumeric: true,
                    numBetween: [1895, new Date().getFullYear() + 10],
                  }}
                  validationError={errorMessages.required}
                  validationErrors={{
                    isNumeric: errorMessages.isNumeric,
                    numBetween: errorMessages.year,
                  }}
                  required
                />
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Input
                  type="number"
                  name="runtime"
                  value={data && data.runtime}
                  label="Runtime (min.)"
                  validations="isNumeric,numBetween:[1,600]"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isNumeric: errorMessages.isNumeric,
                    numBetween: errorMessages.runtime,
                  }}
                  required
                />
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Input
                  type="text"
                  name="genre"
                  value={data && data.genre}
                  label="Genre"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
            </RowXS>
            <RowXS>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="production"
                  value={data && data.production}
                  label="Production"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="country"
                  value={data && data.country}
                  label="Country"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
            </RowXS>
            <RowXS>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="director"
                  value={data && data.director}
                  label="Director"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="writer"
                  value={data && data.writer}
                  label="Writer"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
            </RowXS>
            <RowXS>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="actors"
                  value={data && data.actors}
                  label="Actors"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
              <Col xs="12" sm="6">
                <Input
                  type="text"
                  name="awards"
                  value={data && data.awards}
                  label="Awards"
                  validations="isText,notEmpty,maxLength:200"
                  validationError={errorMessages.required}
                  validationErrors={{
                    isText: errorMessages.isText,
                    maxLength: errorMessages.length200,
                  }}
                  required
                />
              </Col>
            </RowXS>
            <div className="text-right">
              <Button
                className="ml-2"
                color="dark"
                outline
                onClick={this.props.cancel}>
                Cancel
              </Button>
              <Button
                className="ml-2"
                color="dark"
                outline
                disabled={!this.state.valid}>
                Submit
              </Button>
            </div>
          </Col>
        </RowSM>
      </Form>
    );
  };
}

const mapState = state => ({
  list: state.data.list,
  data: state.modal.form.data,
  movies: state.data.list,
  lastId: state.data.lastId
});
export default connect(mapState)(MovieForm);
