import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { getAllItems } from "../../actions/itemsActions";

const ItemList = (props) => {
  const { allItems } = useSelector((state) => state.Items);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllItems()), [dispatch]);

  return (
    <div>
      <Row>
        {allItems
          .filter((item) => !item.trading)
          .map((item) => (
            <Col className="mt-3" key={item.id} xs="6" sm="4" md="3">
              <Item item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ItemList;
