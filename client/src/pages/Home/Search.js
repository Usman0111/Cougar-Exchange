import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

const Search = () => {
  return (
    <InputGroup style={{ marginTop: "10px" }}>
      <InputGroupAddon>
        <Button>Search</Button>
      </InputGroupAddon>
      <Input />
    </InputGroup>
  );
};

export default Search;
