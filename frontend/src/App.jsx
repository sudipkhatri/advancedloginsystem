import Reset from "./components/Reset";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Welcome from "./components/Restricted/Welcome";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  //console.log(isLoggedIn);
  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              path="/user"
              element={<Layout children={<Welcome />} />}
            />
            <Route
              path="*"
              element={<Layout children={<> Error Handling </>} />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Layout children={<>Home</>} />} />
            <Route path="/login" element={<Layout children={<Login />} />} />
            <Route
              path="/register"
              element={<Layout children={<Register />} />}
            />
            <Route
              path="*"
              element={<Layout children={<> Error Handling </>} />}
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
