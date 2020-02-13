import React from "react";
import { Container, CardDeck } from "reactstrap";
import Item from "./Item";

const ItemList = props => {
  let items = [1, 2, 3, 4];

  return (
    <Container
      className="themed-container"
      fluid={true}
      style={{ paddingTop: "10px" }}
    >
      <CardDeck>
        {items.map(num => (
          <Item />
        ))}
      </CardDeck>
    </Container>
  );
};

export default ItemList;
