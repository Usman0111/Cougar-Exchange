import React from "react";
import { Card, Button, CardImg, CardSubtitle, CardBody } from "reactstrap";
import ModifyItem from "./Modals/ModifyItem";

const UserItem = props => {
  const { id, name } = props.item;

  const handleDelete = () => {
    props.deleteItem(id);
  };

  return (
    <Card className="h-100" style={{ marginTop: "10px" }}>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150"
        alt="Card image cap"
      />
      <CardBody className="d-flex flex-column">
        <CardSubtitle>{name}</CardSubtitle>
        {/* <CardText>{description}</CardText> */}
        <ModifyItem item={props.item} modifyItem={props.modifyItem} />
        <Button onClick={handleDelete} block>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserItem;
