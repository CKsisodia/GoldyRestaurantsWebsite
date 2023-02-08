import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUserAction } from "../../../reducer/asyncUserReducer";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginNavigateHandler = () => {
    navigate("/login");
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailSignupHandler = (event) => {
    event.preventDefault();
    setEnteredEmail(event.target.value);
  };
  const passwordSignupHandler = (event) => {
    event.preventDefault();
    setEnteredPassword(event.target.value);
  };
  const createAccountHanndler = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserAction({
        email: enteredEmail,
        password: enteredPassword,
      })
    );
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div>
      <div className="body_signupForm">
        <div className="container_signupForm" id="container">
          <div className="form-container_signupForm log-in-container_signupForm">
            <form className="form_signupForm">
              <h1>Sign Up</h1>
              <input
                type="email"
                placeholder="Email"
                value={enteredEmail}
                onChange={emailSignupHandler}
              />
              <input
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordSignupHandler}
              />
              <button onClick={createAccountHanndler}>Create Account</button>

              <p>Already have an Account?</p>
              <div className="log_in_signupForm" onClick={loginNavigateHandler}>
                Log in
              </div>
            </form>
          </div>
          <div className="overlay-container_signupForm">
            <div className="overlay_signupForm">
              <div className="overlay-panel_signupForm overlay-right_signupForm">
                <h1>Welcome! to SignUp Form</h1>
                <p>Please Enter Your Details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
