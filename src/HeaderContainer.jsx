import React from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';

function HeaderContainer() {
  return (
    <Container fluid as="header">
      <Header as='div' size='huge' dividing>
        <Header textAlign='center' as='h1'>INSTATON</Header>
      </Header>
    </Container>
  );
}

export default HeaderContainer;

