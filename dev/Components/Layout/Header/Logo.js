import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';

const Logo = () => (
  <Fragment>
    <FontAwesomeIcon icon={faFilm} /> MovieDB
  </Fragment>
);

export default Logo;
