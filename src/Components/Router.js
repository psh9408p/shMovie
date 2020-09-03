import React from "react";
import Header from "Components/Header";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <>
      <Header>
        <Switch>
          <Route path="/" excat component={Home} />
          <Route path="/tv" component={TV} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </Header>
    </>
  </Router>
);
