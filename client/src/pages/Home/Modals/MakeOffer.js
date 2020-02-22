import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input
} from "reactstrap";
//import uuid from "uuid";

const MakeOffer = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  //   const { selectedItem, setSelectedItem } = useState("");

  const handleSelect = event => {
    //setSelectedItem();
    console.log("Hello");
    event.preventDefault();
  };

  return (
    <Button className="mt-auto" onClick={toggleModal} block>
      Make Offer
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {/* Making an Offer for {name} */}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="select"
              onChange={handleSelect}
            >
              {/* <option>Select an Item to Offer</option>
              {items.map(item => (
                <option key={item.id}>{item.name}</option>
              ))} */}
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
    </Button>
  );
};

export default MakeOffer;
