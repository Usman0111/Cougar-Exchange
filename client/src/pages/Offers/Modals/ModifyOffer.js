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
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { recantOffer, modifyOffer } from "../../../actions/offersActions";

const ModifyOffer = (props) => {
  const { userItems } = useSelector((state) => state.Items);
  const itemRequested = useSelector((state) => state.Items.allItems).filter(
    (item) => item.id === props.offer.itemRequested
  )[0];
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

  const handleRecant = () => {
    dispatch(recantOffer(props.offer));
  };

  const handleModify = (e) => {
    e.preventDefault();
    dispatch(
      modifyOffer({
        id: props.offer.id,
        previousItem: props.offer.itemOffered,
        newItem: selectedItem.id,
      })
    );
    toggleModal();
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownItem onClick={toggleModal}>Modify Offer</DropdownItem>
        <DropdownItem onClick={handleRecant}>Recant Offer</DropdownItem>
      </DropdownMenu>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modify your offer</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleModify}>
            <FormGroup>
              <Input type="select" onChange={handleSelect} required>
                <option value="">Select a New Item to Offer</option>
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
                  <Item item={itemRequested} />
                </Col>
              </Row>
            ) : (
              <></>
            )}
            <ModalFooter>
              <Button color="primary " type="submit">
                Modify
              </Button>
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModifyOffer;
