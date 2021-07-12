import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Main from './Main';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (bool) => {
    setIsAuthenticated(bool);
  };
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
                <Redirect to="/main" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/main" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/main" />
              )
            }
          />
          <Route
            exact
            path="/main"
            render={(props) =>
              isAuthenticated ? (
                <Main {...props} />
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
