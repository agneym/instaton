import React from 'react';
import PropTypes from 'prop-types';

function LikeThis(props) {
  return (
    <p>
      <strong>
        {props.likes} likes
      </strong>
    </p>
  );
}

LikeThis.propTypes = {
  likes: PropTypes.number.isRequired
}

export default LikeThis;

