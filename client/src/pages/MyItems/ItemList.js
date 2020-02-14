import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Item from "./Item";

const ItemList = props => {
  const [items, setItems] = useState([1, 1, 1, 1, 1, 1]);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addItem = () => {
    setItems([...items, 1]);
  };

  return (
    <Container className="themed-container" fluid={true}>
      <Button block style={{ marginTop: "10px" }} onClick={toggle}>
        Add New Item
      </Button>
      <Row>
        {items.map(num => (
          <Col xs="6" sm="3">
            <Item />
          </Col>
        ))}
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addItem}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ItemList;
