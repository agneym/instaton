import React from "react";
import { Container, Card, Image } from "semantic-ui-react";
import ActionContainer from "./Content/ActionContainer";
import LikeThis from "./Content/LikeThis";
import CardFooter from "./Content/CardFooter";
import Comments from "./Content/Comments";
import CardHeader from "./Content/CardHeader";

const comments = [
  {
    author: "chunk",
    text: "this is awesome"
  },
  {
    author: "fReaK",
    text: "pWolku muthe"
  },
  {
    author: "Aswathy Achu",
    text: "♥"
  }
];

function Content() {
  return (
    <Container text>
      <Card.Group>
        <Card fluid raised className="single-card" as="article">
          <Card.Content>
            <CardHeader />
          </Card.Content>
          <Image src="https://source.unsplash.com/random/400x400" />
          <Card.Content>
            <ActionContainer />
            <LikeThis likes={55} />
            <p>
              <strong>matthew</strong>
              <span> living life.</span>
            </p>
            <Card.Meta>Load more comments</Card.Meta>
            {comments.map((comment, index) => (
              <Comments
                key={index} // eslint-disable-line react/no-array-index-key
                author={comment.author}
                text={comment.text}
              />
            ))}
            <br />
            <Card.Meta className="small-font">4 HOURS AGO</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <CardFooter />
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Content;
