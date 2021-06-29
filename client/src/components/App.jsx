import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import LoginAndRegistration from "./LoginAndRegistration";
import ActivationPage from "./ActivationPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginAndRegistration} />
      <Route exact path="/activation" component={ActivationPage} />
    </Router>
  );
};

export default App;
