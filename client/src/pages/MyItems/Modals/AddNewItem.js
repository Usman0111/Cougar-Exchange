import React, { useState } from "react";
import {
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
import { useDispatch } from "react-redux";
import { addItem } from "../../../actions/userItemsActions";

const AddNewItem = props => {
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemNameDescription] = useState("");

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const addNewItem = event => {
    dispatch(
      addItem({
        name: newItemName,
        description: newItemDescription
      })
    );
    setNewItemName("");
    setNewItemNameDescription("");
    toggle();
    event.preventDefault();
  };

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button style={{ marginTop: "10px" }} onClick={toggle}>
        Add New Item
      </Button>
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

export default AddNewItem;
