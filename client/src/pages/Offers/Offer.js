import React, { useState } from "react";
import {
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Item from "../../components/Item";

const Offer = props => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const buttons = !props.listNum ? (
    <ButtonDropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="border-light bg-light text-dark mr-2">
        <h5 className="m-0 p-0">...</h5>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Modify Offer</DropdownItem>
        <DropdownItem>Recant Offer</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  ) : (
    <ButtonDropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="border-light bg-light text-dark mr-2">
        <h5 className="m-0 p-0">...</h5>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Accept Offer</DropdownItem>
        <DropdownItem>Reject Offer</DropdownItem>
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
          <Item item={props.offer.itemOffered}></Item>
        </Col>
        <Col className="mr-2">
          <Item item={props.offer.itemRequested}></Item>
        </Col>
      </Row>
    </div>
  );
};

export default Offer;
