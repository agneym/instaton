import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';

function Content() {
  return (
    <Container text>
      <Card.Group>
        <Card fluid raised className="single-card">
          <Card.Content>
            <Card.Header>
              matthew
            </Card.Header>
          </Card.Content>
          <Image src="https://source.unsplash.com/random/400x400" />
          <Card.Content>
            <div>
              <span><i className="icon ion-ios-heart-outline" /></span>
              <span><i className="icon ion-ios-chatbubble-outline" /></span>
            </div>
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
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Content;

