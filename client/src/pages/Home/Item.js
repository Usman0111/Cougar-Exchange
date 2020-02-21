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
  FormGroup,
  Label,
  Input
} from "reactstrap";
import uuid from "uuid";

const Item = props => {
  const { name, description } = props.item;
  const { selectedItem, setSelectedItem } = useState("");

  //temporary hard coded items
  const [items] = useState([
    {
      id: uuid.v4(),
      name: "User Item 1",
      description: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
      id: uuid.v4(),
      name: "User Item 2",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const handleSelect = event => {
    //setSelectedItem();
    console.log("Hello");
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

      {/* Modal to Select Item*/}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Making an Offer for {name}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="select"
              onChange={handleSelect}
            >
              <option>Select an Item to Offer</option>
              {items.map(item => (
                <option key={item.id}>{item.name}</option>
              ))}
            </Input>
          </FormGroup>
          <ModalFooter>
            <Button type="submit" color="primary">
              Next
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
