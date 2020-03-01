import React from "react";
import { Card, CardImg, CardSubtitle, CardBody } from "reactstrap";

const Item = props => {
  const { name } = props.item;

  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150"
        alt="Card image cap"
      />
      <CardBody className="d-flex flex-column">
        <CardSubtitle>{name}</CardSubtitle>
        {/* <CardText>{description}</CardText> */}
      </CardBody>
    </Card>
  );
};

export default Item;
