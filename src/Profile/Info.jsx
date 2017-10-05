import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";

function Info() {
  return (
    <Grid className="right-header">
      <Grid.Row className="top-stat">
        <h2 className="title">wonder.boy</h2>
        <Button basic color="black">
          Edit Profile
        </Button>
        <Button icon color="black" basic compact>
          <Icon name="setting" />
        </Button>
      </Grid.Row>
      <Grid.Row className="middle-stat">
        <p>
          <span className="strong-text">14</span>
          <span> posts</span>
        </p>
        <p>
          <span className="strong-text">459</span>
          <span> followers</span>
        </p>
        <p>
          <span className="strong-text">388</span>
          <span> following</span>
        </p>
      </Grid.Row>
      <Grid.Row className="bottom-description" textAlign="justified">
        <p>
          <span className="strong-text">Agney Menon</span>
          <span>
            {" "}
            People who think they are crazy enough to change the world are ones
            that do. #OnAJourneyThere
          </span>
        </p>
      </Grid.Row>
    </Grid>
  );
}

export default Info;
