import React from "react";
import { Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import { useDispatch } from "react-redux";
import { logout } from "../actions/usersActions";
import { useSelector } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.auth);

  return loggedIn ? (
    <Nav className="ml-auto" navbar>
      <NavbarText className="text-light">Hello {user.username}!</NavbarText>
      <NavItem>
        <NavLink
          href="/login"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  ) : (
    <></>
  );
};

export default Logout;
