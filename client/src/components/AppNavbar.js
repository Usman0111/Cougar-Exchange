import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import Logout from "./Logout";
import { useSelector } from "react-redux";

const AppNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn } = useSelector((state) => state.auth);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark light expand="md">
      <Container className="themed-container">
        <NavbarBrand href="/">Cougar Exchange</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {loggedIn ? (
            <>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/offers">Offers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/myItems">My Items</NavLink>
                </NavItem>
              </Nav>
              <Logout />
            </>
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
