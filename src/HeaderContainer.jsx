import React from 'react';
import { Header, Container, Search } from 'semantic-ui-react';

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
        <div className="right-header">
          <a>
            <i className="icon ion-android-compass" />
          </a>
          <a>
            <i className="icon ion-ios-heart" />
          </a>
          <a>
            <i className="icon ion-android-person" />
          </a>
        </div>
      </Header>
    </Container>
  );
}

export default HeaderContainer;

