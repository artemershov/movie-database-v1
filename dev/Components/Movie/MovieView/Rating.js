import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons/faStarHalfAlt';
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons/faStar';
import { faStar as starFill } from '@fortawesome/free-solid-svg-icons/faStar';

const Rating = props => (
  <span className={props.className}>
    {Array.from({ length: 10 }, (el, idx) => {
      const icon =
        props.rating - idx > 0
          ? props.rating - idx < 1
            ? faStarHalfAlt
            : starFill
          : starEmpty;
      return <FontAwesomeIcon icon={icon} key={idx} />;
    })}
  </span>
);

export default Rating;
