import React from 'react';
import {Comment} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Comments({author, text}) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as='strong'>{author}:</Comment.Author>
        <Comment.Text>&nbsp;{text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

Comments.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comments;

