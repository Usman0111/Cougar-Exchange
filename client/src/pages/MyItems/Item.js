import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Item = props => {
  return (
    <Card style={{ marginTop: "10px" }}>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150"
        alt="Card image cap"
      />
      <CardBody>
        <CardSubtitle>Name</CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </CardText>
        <Button block>Button</Button>
      </CardBody>
    </Card>
  );
};

export default Item;
