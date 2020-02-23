import React from "react";
import UserItemList from "./UserItemList";
import { Container } from "reactstrap";
import UserItemContextProvider from "../../contexts/UserItemContext";

const MyItems = () => {
  return (
    <Container>
      <UserItemContextProvider>
        <UserItemList />
      </UserItemContextProvider>
    </Container>
  );
};

export default MyItems;
