import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { PosterBody, PosterImg, PosterPlaceholder } from './Styles';

const checkValidImage = src =>
  new Promise(res => {
    if (src) {
      const img = document.createElement('img');
      img.onload = () => res(src);
      img.onerror = () => res(null);
      img.src = src;
    } else {
      res(null);
    }
  });

export default class Poster extends React.Component {
  state = { src: null };
  mounted = null;
  checkValidImage = src =>
    checkValidImage(src).then(src => {
      this.mounted && this.setState({ src });
    });
  componentDidMount = () => {
    this.mounted = true;
    this.checkValidImage(this.props.src);
  };
  componentDidUpdate = prevProps => {
    if (prevProps.src !== this.props.src) {
      this.checkValidImage(this.props.src);
    }
  };
  componentWillUnmount = () => (this.mounted = false);
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
