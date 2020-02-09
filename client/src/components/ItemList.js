import React from "react";
import { CardDeck } from "reactstrap";
import Item from "./Item";

const ItemList = props => {
  let items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container-fluid" style={{ paddingTop: "10px" }}>
      <CardDeck>
        {items.map(num => (
          <Item />
        ))}
      </CardDeck>
    </div>
  );
};

export default ItemList;
