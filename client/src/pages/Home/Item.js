import React from "react";
import { Card, CardImg, CardSubtitle, CardBody } from "reactstrap";
import MakeOffer from "./Modals/MakeOffer";

const Item = props => {
  const { name } = props.item;

  return (
    <Card className="shadow h-100">
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150"
        alt="Card image cap"
      />
      <CardBody className="d-flex flex-column">
        <CardSubtitle>{name}</CardSubtitle>
        {/* <CardText>{description}</CardText> */}
        <MakeOffer item={props.item} />
      </CardBody>
    </Card>
  );
};

export default Item;
