import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPasswordAction,
  getUserDataAction,
  logInUserAction,
  signUpUserAction,
  updateUserProfileAction,
} from "./asyncUserReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogInData: undefined,
    userSignUpData: undefined,
    userProfileData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUserAction.fulfilled, (state, action) => {
      state.userSignUpData = action.payload;
    });
    builder.addCase(logInUserAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userLogInData = action.payload;
      localStorage.setItem("idToken", action.payload.idToken);
      console.log(7, state.userLogInData);
    });
    builder.addCase(forgotPasswordAction.fulfilled, (state, action) => {});
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userProfileData = action.payload;
    });
    builder.addCase(updateUserProfileAction.fulfilled, (state, action) => {});
  },
});

export default userSlice;
