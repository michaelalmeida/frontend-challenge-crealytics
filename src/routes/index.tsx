import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../components/Home";

const Routes = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Layout component={<Home />} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
