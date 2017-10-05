import React from "react";
import { Grid } from "semantic-ui-react";
import Info from "./Info";

function Header() {
  return (
    <Grid as="article" centered>
      <Grid.Row verticalAlign="middle" columns="two">
        <Grid.Column className="profile-header">
          <img
            src="https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="Person"
            className="avatar"
          />
        </Grid.Column>
        <Grid.Column>
          <Info />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Header;
