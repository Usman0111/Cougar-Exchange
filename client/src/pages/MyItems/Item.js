import React, { useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Item = props => {
  const { id, name, description } = props.item;
  const [newName, changeName] = useState(name);
  const [newDescription, changeDescription] = useState(description);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    props.deleteItem(id);
  };

  const handleModify = event => {
    props.modifyItem({ id, name: newName, description: newDescription });
    toggle();
    event.preventDefault();
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
        <CardText>{description}</CardText>
        <Button className="mt-auto" onClick={toggle} block>
          Modify
        </Button>
        <Button onClick={handleDelete} block>
          Delete
        </Button>
      </CardBody>

      {/* Modal to Modify Items */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Make Changes</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleModify}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={newName}
                name="name"
                id="name"
                placeholder="Enter name"
                onChange={event => {
                  changeName(event.target.value);
                }}
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                value={newDescription}
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={event => {
                  changeDescription(event.target.value);
                }}
                required
              ></Input>
            </FormGroup>
            <ModalFooter>
              <Button type="submit" color="primary">
                Save
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default Item;
