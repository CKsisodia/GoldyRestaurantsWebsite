import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MenuList from "./components/MenuList";
import RestaurantAppBar from "./components/RestaurantAppBar";
import Login from "./components/signUp/login/Login";
import SignUp from "./components/signUp/login/SignUp";
import { getUserDataAction } from "./reducer/asyncUserReducer";
import { useSelector } from "react-redux";

function App() {
  const userLogInData = useSelector((state) => state.user.userLogInData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogInData === undefined) {
      console.log(1)
      dispatch(getUserDataAction());
    } else return;
  }, []);

  return (
    <div>
      <RestaurantAppBar />
      <Routes>
        <Route path="/menulist" element={<MenuList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
