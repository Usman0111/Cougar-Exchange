import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import uuid from "uuid";
import Item from "./Item";

const ItemList = props => {
  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      name: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]);

  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemNameDescription] = useState("");

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addNewItem = event => {
    setItems([
      ...items,
      { id: uuid.v4(), name: newItemName, description: newItemDescription }
    ]);
    setNewItemName("");
    setNewItemNameDescription("");
    toggle();
    event.preventDefault();
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const modifyItem = newItem => {
    setItems(items.map(item => (item.id === newItem.id ? newItem : item)));
  };

  return (
    <div>
      <Button block style={{ marginTop: "10px" }} onClick={toggle}>
        Add New Item
      </Button>
      <Row>
        {items.map(item => (
          <Col key={item.id} xs="12" sm="4" md="3">
            <Item item={item} deleteItem={deleteItem} modifyItem={modifyItem} />
          </Col>
        ))}
      </Row>
      {/*Modal to Add New Items*/}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter New Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={addNewItem}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={newItemName}
                name="name"
                id="name"
                placeholder="Enter name"
                onChange={event => {
                  setNewItemName(event.target.value);
                }}
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                value={newItemDescription}
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={event => {
                  setNewItemNameDescription(event.target.value);
                }}
                required
              ></Input>
            </FormGroup>
            <ModalFooter>
              <Button type="submit" color="primary">
                Add Item
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemList;
