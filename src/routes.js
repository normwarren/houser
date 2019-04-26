import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import House from "./Components/House/House";
import Wizard from "./Components/Wizard/Wizard";

import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route
      path="/"
      component={() => (
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/wizard" component={Wizard} />
          {/* <Route path="/house" component={House} /> */}
        </Switch>
      )}
    />
  </Switch>
);
