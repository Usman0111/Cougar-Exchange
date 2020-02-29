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
    },
    {
      id: uuid.v4(),
      name: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
      id: uuid.v4(),
      name: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]);

  // const [UserItems] = useState([
  //   {
  //     id: uuid.v4(),
  //     name: "User Item 1",
  //     description: "Lorem ipsum dolor sit amet, consectetur"
  //   },
  //   {
  //     id: uuid.v4(),
  //     name: "User Item 2",
  //     description: "Lorem ipsum dolor sit amet, consectetur"
  //   }
  // ]);

  //add hook for offers

  return (
    <div>
      <Row>
        {items.map(item => (
          <Col className="mt-2" key={item.id} xs="12" sm="4" md="3">
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
