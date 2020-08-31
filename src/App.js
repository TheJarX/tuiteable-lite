import React from "react";
import { Box } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TuitsList from "./features/tuits/TuitsList";
import TuitDetail from "./features/tuits/TuitDetail";
import TuitEdit from "./features/tuits/TuitEdit";

function App() {
  return (
    <Router>
      <Box minHeight="100vh" backgroundColor="blackAlpha.100" textAlign="left">
        <Switch>
          <Route path={["/tuits", "/"]} exact>
            <TuitsList />
          </Route>
          <Route path="/tuits/:id" exact>
            <TuitDetail />
          </Route>
          <Route path="/tuits/:id/edit">
            <TuitEdit />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
