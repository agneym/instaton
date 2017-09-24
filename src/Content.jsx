import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';
import Actions from './Content/Actions';

function Content() {
  return (
    <Container text>
      <Card.Group>
        <Card fluid raised className="single-card">
          <Card.Content>
            <Card.Header as="div">
              <span>matthew</span>
            </Card.Header>
            <p className="small-font">San Fransisco</p>
          </Card.Content>
          <Image src="https://source.unsplash.com/random/400x400" />
          <Card.Content>
            <Actions />
            <p>
              <strong>matthew</strong>
              <span> living life.</span>
            </p>
            <p>
              <strong>
                gangan_c_rajeevan, rameez_rajarz, ron_dx and anirudh__nambisan
              </strong>
              <span> like this</span>
            </p>
            <Card.Meta className="small-font">
              4 HOURS AGO
            </Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Content;

