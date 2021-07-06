import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

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
  }

  handleGetFields(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmitRegistrationInfo() {
    const {
      lastName,
      firstName,
      email,
      password,
      retypePassword,
      phoneNumber,
      organization,
    } = this.state;
    let loginObj = {
      lastName: lastName,
      firstName: firstName,
      email: email,
      password: password,
      retypePassword: retypePassword,
      phoneNumber: phoneNumber,
      organization: organization,
    };
    axios.post("http://localhost:3000/auth/register", loginObj);
  }

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
        <Link to="/login">Already Registered? Click Here.</Link>
      </div>
    );
  }
}

export default Register;
