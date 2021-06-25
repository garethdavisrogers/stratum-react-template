import React from "react";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      lastName: "",
      firstName: "",
      password: "",
      retypePassword: "",
      email: "",
      phoneNumber: "",
      organization: "",
    };

    this.handleSubmitRegistrationInfo =
      this.handleSubmitRegistrationInfo.bind(this);
  }

  handleSubmitRegistrationInfo() {}

  render() {
    return (
      <div>
        Log In
        <form>
          <div>
            <label>First Name: </label>
            <input type="text" name="firstName" />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" name="lastName" />
          </div>
          <div>
            <label>Password: </label>
            <input type="text" name="password" />
          </div>
          <div>
            <label>Retype Password: </label>
            <input type="text" name="retypePassword" />
          </div>
          <div>
            <label>Email: </label>
            <input type="text" name="email" />
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="text" name="phoneNumber" />
          </div>
          <div>
            <label>Organization: </label>
            <input type="text" name="organization" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
