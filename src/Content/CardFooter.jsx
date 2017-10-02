import React from 'react';
import {Form} from 'semantic-ui-react';

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
  }
  render() {
    return (
      <Form>
        <Form.Field className="card-footer">
          <input placeholder='Add a comment...' />
        </Form.Field>
      </Form>
    );
  }
}

export default CardFooter;