import React from "react";
import { Header, Container, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LinkContainer from "./Header/LinkContainer";

function HeaderContainer() {
  return (
    <Container fluid as="header">
      <Header as="div" size="huge" dividing className="header-container">
        <div className="left-header">
          <Link to="/" className="top-icon">
            <i className="icon ion-social-instagram" />
            <Header textAlign="center" as="h1">
              INSTATON
            </Header>
          </Link>
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
