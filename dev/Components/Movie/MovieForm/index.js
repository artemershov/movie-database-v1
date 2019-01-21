import React from 'react';
import { RowXS, RowSM } from '../../Layout/other/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import Poster from '../Poster';
import Form from '../../Form';
import Input from '../../Form/Input';
import errorMessages from './validation';
import startCase from 'lodash/startCase';

export default class MovieForm extends React.Component {
  state = { valid: false };

  titleValidate = (values, value) => {
    const title = value && startCase(value.replace(/\s+/g, ' ').trim());
    if (this.props.data && this.props.data.title == title) return true;
    return !this.props.actions.validateTitle(title);
  };

  posterInput = React.createRef();
  posterValue = () =>
    this.posterInput.current && this.posterInput.current.getValue();

  onValid = () => this.setState({ valid: true });
  onInvalid = () => this.setState({ valid: false });

  submit = model => {
    Object.keys(model).forEach(key => {
      if (typeof model[key] == 'string') {
        model[key] = model[key].replace(/\s+/g, ' ').trim();
        if (key == 'title') model[key] = startCase(model[key]);
      }
    });
    this.props.actions.submit(model);
  };

  render = () => {
    const data = this.props.data;
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
                    isTitle: true,
                    notEmpty: true,
                    maxLength: 200,
                    isValidTitle: this.titleValidate,
                  }}
                  validationError={errorMessages.required}
                  validationErrors={{
                    isTitle: errorMessages.isTitle,
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
                onClick={this.props.actions.cancel}>
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