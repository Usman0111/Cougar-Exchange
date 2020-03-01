import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { getAllItems } from "../../actions/allItemsActions";

const ItemList = props => {
  const { items } = useSelector(state => state.allItems);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllItems()), [dispatch]);

  return (
    <div>
      <Row>
        {items.map(item => (
          <Col className="mt-3" key={item.id} xs="6" sm="4" md="3">
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
