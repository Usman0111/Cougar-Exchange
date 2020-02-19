import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import uuid from "uuid";
import Item from "./Item";

const ItemList = props => {
  const [items] = useState([
    {
      id: uuid.v4(),
      name: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]);

  return (
    <div>
      <Row>
        {items.map(item => (
          <Col key={item.id} xs="12" sm="4" md="3">
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
