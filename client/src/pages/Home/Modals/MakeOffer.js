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
  Label,
  Form
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeOffer } from "../../../actions/offersActions";

const MakeOffer = props => {
  const { userItems } = useSelector(state => state.Items);
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState();

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    setSelectedItem();
  };

  const handleSelect = e => {
    const id = e.target.value;
    setSelectedItem(...userItems.filter(item => item.id === id));
  };

  const handleConfirm = e => {
    e.preventDefault();
    dispatch(
      makeOffer({
        itemOffered: { id: selectedItem.id, name: selectedItem.name },
        itemRequested: { id: props.item.id, name: props.item.name }
      })
    );
    toggleModal();
  };

  return (
    <Button className="mt-1" onClick={toggleModal} block>
      Make Offer
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Make your offer</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleConfirm}>
            <FormGroup>
              <Input type="select" onChange={handleSelect} required>
                <option value="">Select an Item to Offer</option>
                {userItems.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </FormGroup>

            {selectedItem ? (
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
              <></>
            )}
            <ModalFooter>
              <Button color="primary " type="submit">
                Confirm
              </Button>
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </Button>
  );
};

export default MakeOffer;
