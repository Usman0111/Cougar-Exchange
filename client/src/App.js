import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/AppNavbar";
import MyItems from "./pages/MyItems/MyItems";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Home} exact />
      <Route path="/myItems" component={MyItems} />
      <Route path="/Offers" />
    </Router>
  );
}

export default App;
