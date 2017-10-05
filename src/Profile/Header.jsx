import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Header() {
  return (
    <article className="profile-header">
      <img
        src="https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        alt="Person"
        className="avatar"
      />
      <h2 className="title">wonder.boy</h2>
      <Button basic color="black">
        Edit Profile
      </Button>
      <Button icon color="black" basic compact>
        <Icon name="setting" />
      </Button>
    </article>
  );
}

export default Header;
