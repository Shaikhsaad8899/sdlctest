import React, { useState } from "react";
// import { Link } from "react-router-dom";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import "../Components/Login.css";
export const Login = () => {
 const [name, setName]=useState();
console.log('name')
  const [emailInput, setEmailInput] = useState();

  const [emailError, setEmailError] = useState();
  const validateEmail = (e) => {
    setEmailInput(e.target.value);

    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  // const handleEmailChange = (a) => {
  // };
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      email: "e@e.com",
      password: "passss",
    };
    if (
      emailInput === hardcodedCred.email &&
      passwordInput === hardcodedCred.password
    ) {
      navigate("/Landing");
    } else {
      alert("Please Enter Correct Sign in Details");
    }
  };

  return (
    <React.Fragment>
      <div className="main-div">
        <div className="child-div">
          <form autoComplete="off" onSubmit={handleLoginSubmit}>
            <h3 id="signin">Sign In</h3>
            <div>
              <label id="sign-in-labels">Email address</label>
              <br />
              <input type="text" placeholder="Full Name"  onChange={(e)=> setName(e.target.value)} />
              <br /> <span>{name}</span>
              <input
                type="email"
                className="form-control"
                id="emails"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailInput}
                // onChange={handleEmailChange}
                onChange={validateEmail}
              />

              <br />
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "red",
                }}
              >
                {emailError}
              </span>
            </div>
            <div className="mb-3">
              <label id="sign-in-labels">Password</label>
              <br />
              <input
                // type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3">
              <div className="check-box">
                <input type="checkbox" />
                <label className="check-text">Remember me</label>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
