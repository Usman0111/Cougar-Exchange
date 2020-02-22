import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import uuid from "uuid";
import UserItem from "./UserItem";
import AddNewItem from "./Modals/AddNewItem";

const UserItemList = props => {
  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      name: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]);

  const addItem = item => {
    setItems([...items, item]);
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const modifyItem = newItem => {
    setItems(items.map(item => (item.id === newItem.id ? newItem : item)));
  };

  return (
    <div>
      <AddNewItem addItem={addItem} />
      <Row>
        {items.map(item => (
          <Col key={item.id} xs="12" sm="4" md="3">
            <UserItem
              item={item}
              deleteItem={deleteItem}
              modifyItem={modifyItem}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default UserItemList;
