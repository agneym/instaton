import React from 'react';
import {Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ActionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
      commentClick: false
    }
    this.likePic = this.likePic.bind(this);
  }
  likePic(event) {
    event.preventDefault();
    this.setState({
      liked: !this.state.liked
    })
  }
  render() {
    return (
      <div className="action-container">
        <span 
          onClick={this.likePic} 
          className="button"
          role="button"
          tabIndex={0}
        >
          {
            this.state.liked?
              <Icon name="heart" size="small" link color="red" />:
              <Icon name="heart outline" size="small" link />
          }
        </span>
        <span>
          <Icon name="comment outline" size="small" link />
        </span>
      </div>
    );
  }
}

ActionContainer.defaultProps = {
  liked: false
}

ActionContainer.propTypes = {
  liked: PropTypes.bool
}

export default ActionContainer;