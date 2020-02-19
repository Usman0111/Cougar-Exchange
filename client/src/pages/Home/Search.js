import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

const Search = () => {
  return (
    <InputGroup style={{ marginTop: "10px" }}>
      <Input />
      <InputGroupAddon addonType="append">
        <Button>Search</Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
