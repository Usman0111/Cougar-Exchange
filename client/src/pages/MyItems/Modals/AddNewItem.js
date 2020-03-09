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
import uuid from "uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../../../actions/itemsActions";

const AddNewItem = props => {
  const [newItemName, setNewItemName] = useState("");

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const addNewItem = event => {
    dispatch(
      addItem({
        id: uuid.v4(),
        name: newItemName
      })
    );
    setNewItemName("");
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
                placeholder="Enter name"
                onChange={event => {
                  setNewItemName(event.target.value);
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
