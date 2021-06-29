import React from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = { usernameField: "", passwordField: "" };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleSubmitLoginInfo = this.handleSubmitLoginInfo.bind(this);
  }

  handleGetFields(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmitLoginInfo() {
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
