import React, { useState } from "react";
import {
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item";
import ModifyOffer from "./Modals/ModifyOffer";
import { acceptOffer, rejectOffer } from "../../actions/offersActions";

const Offer = (props) => {
  const Items = [
    ...useSelector((state) => state.Items.userItems),
    ...useSelector((state) => state.Items.allItems),
  ];

  const itemOffered = Items.filter(
    (item) => item.id === props.offer.itemOffered
  )[0];
  const itemRequested = Items.filter(
    (item) => item.id === props.offer.itemRequested
  )[0];

  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const dispatch = useDispatch();

  const handleAccept = () => {
    dispatch(acceptOffer(props.offer));
  };

  const handleReject = () => {
    dispatch(rejectOffer(props.offer));
  };

  const buttons = !props.listNum ? (
    <ButtonDropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="border-light bg-light text-dark mr-2">
        <h5 className="m-0 p-0">...</h5>
      </DropdownToggle>
      <ModifyOffer offer={props.offer} />
    </ButtonDropdown>
  ) : (
    <ButtonDropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="border-light bg-light text-dark mr-2">
        <h5 className="m-0 p-0">...</h5>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handleAccept}>Accept Offer</DropdownItem>
        <DropdownItem onClick={handleReject}>Reject Offer</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );

  return (
    <div className="border bg-light shadow rounded mt-3 p-1 ">
      <div className="d-flex justify-content-between">
        <h5 className="mt-1 pl-2 mb-0">Offered</h5>
        <h5 className="mt-1 mb-0" style={{ marginLeft: "90px" }}>
          Requested
        </h5>
        <div>{buttons}</div>
      </div>
      <Row className="pb-2">
        <Col className="ml-2">
          <Item item={itemOffered}></Item>
        </Col>
        <Col className="mr-2">
          <Item item={itemRequested}></Item>
        </Col>
      </Row>
    </div>
  );
};

export default Offer;
