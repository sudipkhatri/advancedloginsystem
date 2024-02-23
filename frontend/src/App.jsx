import Reset from "./components/Reset";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Welcome from "./components/Restricted/Welcome";
import Home from "./components/Home/Home";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token!==undefined) {
      console.log(token);
      dispatch(authActions.login());
    }
  }, [dispatch]);
  console.log(isLoggedIn);
  return (
    <>
      <ToastContainer />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/user" element={<Layout> <Welcome/> </Layout>} />
            <Route path="*" element={<Layout> <>Error Div</> </Layout>} />
          </>
        ) : (
          <>
            <Route path="/" element={<Layout> <Home/> </Layout>} />
            <Route path="/login" element={<Layout> <Login/> </Layout>} />
            <Route path="/register" element={<Layout> <Register/> </Layout>} />
            <Route path="*" element={<Layout> <>Error Div</> </Layout>} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
