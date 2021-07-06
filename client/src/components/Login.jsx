import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { usernameField: "", passwordField: "" };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleSubmitLoginInfo = this.handleSubmitLoginInfo.bind(this);
  }

  handleGetFields(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmitLoginInfo(e) {
    e.preventDefault();
    const { usernameField, passwordField } = this.state;
    let loginObj = { email: usernameField, password: passwordField };
    axios.post("http://localhost:3000/auth/login", loginObj);
  }

  render() {
    return (
      <div>
        Log In
        <form>
          <div>
            <label>Username: </label>
            <input type="text" name="usernameField" />
          </div>
          <div>
            <label>Password: </label>
            <input type="text" name="passwordField" />
          </div>
          <button onClick={this.handleSubmitLoginInfo}>Submit</button>
        </form>
        <Link to="/register">Not Registered? Click Here.</Link>
      </div>
    );
  }
}

export default Login;
