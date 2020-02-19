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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Item = props => {
  const { name, description } = props.item;

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(prevState => !prevState);

  const handleModify = event => {
    console.log("Hey");
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
        <Button className="mt-auto" onClick={toggleModal} block>
          Make Offer
        </Button>
      </CardBody>

      {/* Modal to Make Offer*/}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Make an Offer for {name}</ModalHeader>
        <ModalBody>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggleDropDown}
            style={{ marginBottom: "20px" }}
          >
            <DropdownToggle caret>Select an Item to Offer</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={handleModify}>Something</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <ModalFooter>
            <Button type="submit" color="primary">
              Offer
            </Button>{" "}
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default Item;
