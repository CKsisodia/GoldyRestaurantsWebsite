import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../reducer/restaurantSlice";
import userSlice from "../reducer/userSlice";

const store = configureStore({
  reducer: { restaurant: restaurantSlice.reducer, user: userSlice.reducer },
});

export default store;
