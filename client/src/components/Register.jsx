import React from "react";
import axios from "axios";

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
    this.handleGetFields = this.handleGetFields.bind(this);

    axios.defaults.withCredentials = true;
  }

  handleGetFields() {}
  handleSubmitRegistrationInfo() {}

  render() {
    return (
      <div>
        Register with FRS
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
          <button onClick={this.handleSubmitRegistrationInfo}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
