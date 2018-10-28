import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../client/pages/HomePage";
import AddEther from "../client/pages/AddEther";
import SendEther from "../client/pages/SendEther";
import ProfilePage from "../client/pages/ProfilePage";
import LoginPage from "../client/pages/LoginPage";
import StartPage from "../client/pages/StartPage";

const RenderRoutes = () => (
  <Router>
    <div>
      <Route path="/Home" component={HomePage} />
      <Route path="/Add" component={AddEther} />
      <Route path="/Send" component={SendEther} />
      <Route path="/Leaderboard" component={ProfilePage} />
      <Route path="/Login" component={LoginPage} />
      <Route exact path="/" component={StartPage} />
    </div>
  </Router>
);

export default RenderRoutes;
