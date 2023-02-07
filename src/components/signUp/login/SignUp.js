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
      <div className="body">
        <div className="container" id="container">
          <div className="form-container log-in-container">
            <form>
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

              <div className="newUserSignUp">
                <p>Already have an Account?</p>
                <div className="log_in" onClick={loginNavigateHandler}>
                  Log in
                </div>
              </div>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
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
