import React, { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";

const LoginAndRegistration = () => {
  const [showRegister, setShowRegister] = useState(false);
  const showOrUnshowRegister = (e) => {
    showRegister = setShowRegister(!showRegister);
  };

  return (
    <div>
      {showRegister && (
        <div>
          <Register />
          <a onClick={showOrUnshowRegister}>
            Already have an account? Click here to register.
          </a>
        </div>
      )}
      {!showRegister && (
        <div>
          <Login />
          <a onClick={showOrUnshowRegister}>
            Don't have an account? Click here to register.
          </a>
        </div>
      )}
    </div>
  );
};

export default LoginAndRegistration;
