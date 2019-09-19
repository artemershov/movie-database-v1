import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { PosterBody, PosterImg, PosterPlaceholder } from './Styles';

export default class Poster extends React.Component {
  state = { src: null };
  rejectPromise = null;
  checkValidImage = src => {
    new Promise((res, rej) => {
      this.rejectPromise = rej;
      if (src) {
        const img = new Image();
        img.onload = () => res(src);
        img.onerror = () => res(null);
        img.src = src;
      } else {
        res(null);
      }
    }).then(src => this.setState({ src }), () => {});
  };
  componentDidMount = () => {
    this.checkValidImage(this.props.src);
  };
  componentDidUpdate = prevProps => {
    if (prevProps.src !== this.props.src) {
      this.checkValidImage(this.props.src);
    }
  };
  componentWillUnmount = () => this.rejectPromise && this.rejectPromise();
  render = () => (
    <PosterBody className={this.props.className}>
      {this.state.src ? (
        <PosterImg style={{ backgroundImage: `url(${this.state.src})` }} />
      ) : (
        <PosterPlaceholder>
          <FontAwesomeIcon icon={faFilm} size="4x" />
        </PosterPlaceholder>
      )}
    </PosterBody>
  );
}
