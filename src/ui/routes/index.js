import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages";

export default props => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);
