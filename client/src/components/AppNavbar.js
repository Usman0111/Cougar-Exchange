import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark light expand="md">
        <NavbarBrand href="/">Cougar Exchange</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>My Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>My Deals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
