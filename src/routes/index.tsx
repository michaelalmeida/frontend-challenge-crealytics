import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";

const Routes = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Layout component={<> a </>} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
