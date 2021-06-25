import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ActivationPage from "./ActivationPage";

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route>
            <ActivationPage path="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
