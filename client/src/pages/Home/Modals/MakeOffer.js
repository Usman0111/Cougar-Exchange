import React, { useState } from "react";
import Item from "../../../components/Item";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Row,
  Col,
  Label
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeOffer } from "../../../actions/offersActions";

const MakeOffer = props => {
  const userItems = useSelector(state => state.userItems.items);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  const [selectedItem, setSelectedItem] = useState();

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    setSelected(false);
  };

  const handleSelect = e => {
    const id = e.target.value;
    setSelectedItem(...userItems.filter(item => item.id === id));
  };

  const handleConfirm = () => {
    dispatch(
      makeOffer({
        itemOfferd: selectedItem.id,
        itemRequested: props.item.id,
        status: "pending"
      })
    );
    toggleModal();
  };

  const button = selected ? (
    <>
      <Button onClick={toggleSelected} color="primary">
        Back
      </Button>
      <Button onClick={handleConfirm} color="primary">
        Confirm
      </Button>
    </>
  ) : (
    <Button onClick={toggleSelected} color="primary">
      Next
    </Button>
  );

  return (
    <Button className="mt-1" onClick={toggleModal} block>
      Make Offer
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Make your offer</ModalHeader>
        <ModalBody>
          {selected ? (
            <Row className="mb-3">
              <Col xs="6">
                <Label>Your Item</Label>
                <Item item={selectedItem} />
              </Col>
              <Col xs="6">
                <Label>Exchange With</Label>
                <Item item={props.item} />
              </Col>
            </Row>
          ) : (
            <FormGroup>
              <Input type="select" onChange={handleSelect}>
                <option>Select an Item to Offer</option>
                {userItems.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          )}
          <ModalFooter>
            {button}{" "}
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
