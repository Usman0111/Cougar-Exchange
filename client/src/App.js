import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/AppNavbar";
import MyItems from "./pages/MyItems/MyItems";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute path="/" component={Home} exact />
      <ProtectedRoute path="/myItems" component={MyItems} />
      <ProtectedRoute path="/offers" component={Offers} />
    </Router>
  );
}

export default App;
