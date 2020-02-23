import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import UserItem from "./UserItem";
import AddNewItem from "./Modals/AddNewItem";
import { UserItemContext } from "../../contexts/UserItemContext";

const UserItemList = props => {
  const { items, addItem, deleteItem, modifyItem } = useContext(
    UserItemContext
  );

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
