import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Home from "./components/Home";
import Characters from "./components/Characters"
// import GamePage from "./components/GamePage";
// import Profile from "./components/Profile";

export default (
  <Switch>
    {/* <Route path="/profile" component={Profile} /> */}
    {/* <Route path='/character/:id' component={Character} /> */}
    <Route path='/characters' component={Characters} />
    <Route exact path="/home" component={Home} />
    <Route path="/" component={Home} />
  </Switch>
);