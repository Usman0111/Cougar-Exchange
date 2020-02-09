import React from "react";
import "./App.css";
import Navbar from "./components/AppNavbar";
import ItemList from "./components/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
    </div>
  );
}

export default App;
