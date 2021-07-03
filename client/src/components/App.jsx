import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ActivationPage from "./ActivationPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              !isAuthenticated ? (
                <Redirect to="/login" />
              ) : (
                <Redirect to="/activation" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} />
              ) : (
                <Redirect to="/activation" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} />
              ) : (
                <Redirect to="/activation" />
              )
            }
          />
          <Route
            exact
            path="/activation"
            render={(props) =>
              isAuthenticated ? (
                <ActivationPage {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
