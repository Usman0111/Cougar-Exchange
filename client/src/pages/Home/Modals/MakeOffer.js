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
  Form,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeOffer } from "../../../actions/offersActions";
import uuid from "uuid";

const MakeOffer = (props) => {
  const { userItems } = useSelector((state) => state.Items);
  const userId = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState();

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    setSelectedItem();
  };

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedItem(...userItems.filter((item) => item.id === id));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(
      makeOffer({
        id: uuid.v4(),
        itemOffered: selectedItem.id,
        itemRequested: props.item.id,
        userId,
        otherId: props.item.userId,
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
                {userItems
                  .filter((item) => !item.trading)
                  .map((item) => (
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
