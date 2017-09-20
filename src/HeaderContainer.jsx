import React from 'react';
import { Header, Container, Search, Icon } from 'semantic-ui-react';
import LinkContainer from './Header/LinkContainer';

function HeaderContainer() {
  return (
    <Container fluid as="header">
      <Header as='div' size='huge' dividing className="header-container">
        <div className="left-header">
          <i className="icon ion-social-instagram" />
          <Header textAlign='center' as='h1'>INSTATON</Header>
        </div>
        <div className="center-header">
          <Search size="mini" />
        </div>
        <LinkContainer />
      </Header>
    </Container>
  );
}

export default HeaderContainer;

