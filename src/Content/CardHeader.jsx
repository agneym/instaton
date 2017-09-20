import React from 'react';
import {Card} from 'semantic-ui-react';

function CardHeader() {
  return (
    <span>
      <Card.Header as="div">
        <strong>matthew</strong>
      </Card.Header>
      <p className="small-font">San Fransisco</p>
    </span>
  );
}

export default CardHeader;

