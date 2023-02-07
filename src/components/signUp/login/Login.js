import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  forgotPasswordAction,
  logInUserAction,
} from "../../../reducer/asyncUserReducer";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupHandler = () => {
    navigate("/signup");
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const userLogInData = useSelector((state) => state.user.userLogInData);
  console.log(userLogInData);

  useEffect(() => {
    if (userLogInData !== undefined) {
      navigate("/menulist");
    }
  }, [userLogInData]);

  const emailLogInHandler = (event) => {
    event.preventDefault();
    setEnteredEmail(event.target.value);
  };
  const passwordLogInHandler = (event) => {
    event.preventDefault();
    setEnteredPassword(event.target.value);
  };
  const LogInHanndler = (event) => {
    event.preventDefault();
    console.log("1", enteredEmail, enteredPassword);
    dispatch(
      logInUserAction({
        email: enteredEmail,
        password: enteredPassword,
      })
    );
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const forgotHandler = (event) => {
    event.preventDefault();
    console.log("1", enteredEmail);
    dispatch(
      forgotPasswordAction({
        email: enteredEmail,
      })
    );
    setEnteredEmail("");
  };

  return (
    <div>
      <div className="body">
        <div className="container" id="container">
          <div className="form-container log-in-container">
            <form>
              <h1>Login</h1>
              <input
                type="email"
                placeholder="Email"
                value={enteredEmail}
                onChange={emailLogInHandler}
              />
              <input
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordLogInHandler}
              />
              <p
                onClick={forgotHandler}
                style={{ cursor: "pointer", color: "red", fontWeight: "700" }}
              >
                Forgot your password?
              </p>
              <button onClick={LogInHanndler}>Log In</button>
              <div className="newUser">
                <p>New to Food Yog?</p>
                <div className="create_account" onClick={signupHandler}>
                  Create Account
                </div>
              </div>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Welcome! to Login Form</h1>
                <p>Please Enter Your Details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
