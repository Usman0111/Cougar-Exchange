import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/AppNavbar";
import MyItems from "./pages/MyItems/MyItems";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact />
      <Route path="/myItems" component={MyItems} />
    </Router>
  );
}

export default App;
