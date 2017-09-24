import React from 'react';
import Heart from './Heart';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearted: false
    }
  }
  render() {
    return (
      <div className="action-container">
        <span>
          <Heart className="icon" />
        </span>
        <span>
          <i className="icon ion-ios-chatbubble-outline" />
        </span>
      </div>
    );
  }
}

export default Actions;