import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup
} from 'reactstrap';

const offercard = (props) => {
  return (
<CardGroup>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
        <CardBody>
          <CardTitle>What you want</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Item Desc</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
        <CardBody>
          <CardTitle>What you're giving</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText> Item Desc </CardText>
        </CardBody>
      </Card>
      <Card >
		<Button style={{ margin:"35% 10%" }}> Modify </Button>
		<Button style={{ margin:"0% 10%" }}> Recant </Button>
      </Card>
    </CardGroup>
  );
};

export default offercard;
