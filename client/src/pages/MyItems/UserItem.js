import React from "react";
import { Card, Button, CardImg, CardSubtitle, CardBody } from "reactstrap";
import ModifyItem from "./Modals/ModifyItem";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../actions/userItemsActions";

const UserItem = props => {
  const { id, name } = props.item;
  const dispatch = useDispatch();

  return (
    <Card className="shadow h-100 ">
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150"
        alt="Card image cap"
      />
      <CardBody className="d-flex flex-column">
        <CardSubtitle>{name}</CardSubtitle>
        {/* <CardText>{description}</CardText> */}
        <ModifyItem item={props.item} />
        <Button onClick={() => dispatch(deleteItem(id))} block>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserItem;
