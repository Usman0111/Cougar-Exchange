import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import UserItem from "./UserItem";
import AddNewItem from "./Modals/AddNewItem";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../actions/userItemsActions";

const UserItemList = props => {
  const { items } = useSelector(state => state.userItems);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getItems()), [dispatch]);

  return (
    <div>
      <AddNewItem />
      <Row>
        {items.map(item => (
          <Col key={item.id} className="mt-3" xs="6" sm="4" md="3">
            <UserItem item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default UserItemList;
