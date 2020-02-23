import React, { createContext, useState } from "react";
import uuid from "uuid";

export const UserItemContext = createContext();

const UserItemContextProvider = props => {
  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      name: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]);

  const addItem = item => {
    setItems([...items, item]);
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const modifyItem = newItem => {
    setItems(items.map(item => (item.id === newItem.id ? newItem : item)));
  };

  return (
    <UserItemContext.Provider
      value={{ items, addItem, deleteItem, modifyItem }}
    >
      {props.children}
    </UserItemContext.Provider>
  );
};

export default UserItemContextProvider;
