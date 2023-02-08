import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfileAction } from "../reducer/asyncUserReducer";
import "./ProfileForm.css";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPhotoUrl, setEnteredPhotoUrl] = useState("");

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const photoUrlHandler = (event) => {
    setEnteredPhotoUrl(event.target.value);
  };

  const updateButtonHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateUserProfileAction({
        userName: enteredUserName,
        photoUrl: enteredPhotoUrl,
      })
    );
    setEnteredUserName("");
    setEnteredPhotoUrl("");
  };
  const cancelButtonHandler = () => {
    navigate("/menulist" );
    setEnteredUserName('');
    setEnteredPhotoUrl('');
  };

  return (
    <div>
      <div className="body_profile_form">
        <div className="container_profile_form" id="container">
          <div className="form-container_profile_form log-in-container_profile_form">
            <form className="form_profile_form">
              <h1>Profile</h1>
              <input
                type="text"
                placeholder="UserName"
                value={enteredUserName}
                onChange={userNameHandler}
              />
              <input
                type="url"
                placeholder="Photo Url"
                value={enteredPhotoUrl}
                onChange={photoUrlHandler}
              />

              <div className="twoButton">
                <button onClick={updateButtonHandler}>Update</button>
                <div className="cancelButton" onClick={cancelButtonHandler}>
                  Cancel
                </div>
              </div>
            </form>
          </div>
          <div className="overlay-container_profile_form">
            <div className="overlay_profile_form">
              <div className="overlay-panel_profile_form overlay-right_profile_form">
                <h1>Please! Update Your Profile</h1>
                <p>Enter Your Details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
