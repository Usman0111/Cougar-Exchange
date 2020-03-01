import React from "react";
import { Button, Row, Col } from "reactstrap";
import Item from "../../components/Item";

const Offer = props => {
  const buttons = !props.listNum ? (
    <div>
      <Button block> Modify Offer</Button> <Button block>Recant Offer</Button>
    </div>
  ) : (
    <div>
      <Button block> Accept Offer</Button> <Button block>Reject Offer</Button>
    </div>
  );

  return (
    <Row className="border bg-light mt-3">
      <Col className="p-2">
        <Item item={props.offer.itemOffered}></Item>
      </Col>
      <Col className="p-2">
        <Item item={props.offer.itemRequested}></Item>
      </Col>
      <Col className="p-2">{buttons}</Col>
    </Row>
  );
};

export default Offer;
