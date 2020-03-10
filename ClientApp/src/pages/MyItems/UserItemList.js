import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import UserItem from "./UserItem";
import AddNewItem from "./Modals/AddNewItem";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems } from "../../actions/itemsActions";

const UserItemList = props => {
  const { userItems } = useSelector(state => state.Items);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllItems()), [dispatch]);

  return (
    <div>
      <AddNewItem />
      <Row>
        {userItems.map(item => (
          <Col key={item.id} className="mt-3" xs="6" sm="4" md="3">
            <UserItem item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default UserItemList;
