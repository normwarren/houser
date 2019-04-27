import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import House from "./Components/House/House";
import Wizard from "./Components/Wizard/Wizard";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";

import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route
      path="/"
      component={() => (
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/wizard" component={Wizard} />
          <Route path="/wizard/step1" component={Step1} />
          <Route path="/wizard/step2" component={Step2} />
          <Route path="/wizard/step3" component={Step3} />
        </Switch>
      )}
    />
  </Switch>
);
