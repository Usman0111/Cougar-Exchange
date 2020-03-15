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
import { modifyItem } from "../../../actions/itemsActions";
import { useDispatch } from "react-redux";

const ModifyItem = props => {
  const { id, name, description } = props.item;
  const [newName, changeName] = useState(name);
  const [newDescription, changeDescription] = useState(description);

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleModify = event => {
    dispatch(modifyItem({ id, name: newName, description: newDescription }));
    toggle();
    event.preventDefault();
  };

  const toggle = () => setModal(!modal);
  return (
    <Button className="mt-1" onClick={toggle} block>
      Modify
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
    </Button>
  );
};

export default ModifyItem;
