import React from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = { usernameField: "", passwordField: "" };

    this.handleSubmitLoginInfo = this.handleSubmitLoginInfo.bind(this);
  }

  handleSubmitLoginInfo() {}

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
