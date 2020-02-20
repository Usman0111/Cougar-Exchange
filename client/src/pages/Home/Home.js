import React from "react";
import Search from "./Search";
import ItemList from "./ItemList";
import { Container } from "reactstrap";

const Home = () => {
  return (
    <Container>
      <Search />
      <ItemList />
    </Container>
  );
};

export default Home;
