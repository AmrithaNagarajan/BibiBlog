import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: ""
  });

  // to handle the username and password
  function handleChange(event) {
    const { name, value } = event.target;

    setLoginDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(value);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Hello {loginDetails.userName}</h1>
        <form>
          <input
            className="userDetails"
            type="type"
            onChange={handleChange}
            value={loginDetails.userName}
            name="userName"
            placeholder="Username"
          />
          <input
            className="userDetails"
            type="password"
            onChange={handleChange}
            value={loginDetails.password}
            name="password"
            placeholder="Password"
          />
          <Link to="/MainPage">
          <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
