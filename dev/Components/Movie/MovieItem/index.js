import React from 'react';
import Poster from '../Poster';
import { MovieBody, MovieData } from './Styles';
import Controls from './Controls';

export default class MovieItem extends React.Component {
  view = () => this.props.actions.view(this.props.data);
  edit = e => {
    e.stopPropagation();
    this.props.actions.edit(this.props.data);
  };
  remove = e => {
    e.stopPropagation();
    this.props.actions.remove(this.props.data.id);
  };

  onMouseEnter = () => this.props.hover(this.props.data.poster);
  onMouseLeave = () => this.props.hover(null);

  render = () => (
    <MovieBody
      className={this.props.className}
      onMouseEnter={this.onMouseEnter}
      onClick={this.view}>
      <Poster src={this.props.data.poster} />
      <MovieData>
        <div>
          <h3>{this.props.data.title}</h3>
          <div className="lead">{this.props.data.year}</div>
        </div>
        {this.props.isEditable && (
          <Controls color="light" edit={this.edit} remove={this.remove} />
        )}
      </MovieData>
    </MovieBody>
  );
}
