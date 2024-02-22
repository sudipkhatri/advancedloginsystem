import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { login } from "../api/handleApis";
import { useState, useEffect } from "react";

const Auth = () => {
  const [register, setRegister] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    path === "/register" ? setRegister(true) : setRegister(false);
  }, [path]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { data, isLoading } = useQuery({
      queryFn: () => login(""), // this is where we invoke our API call to get data
    });

  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-teal-500 bg-clip-text">
              {register ? "SignUp" : "Login"}
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
            {register && (
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <div>
                  <input
                    name="name"
                    type="text"
                    value={input.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <div>
                <input
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <div>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                {register ? "SignUp" : "Login"}
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-6">
            {register ? "Already a user?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setRegister(!register)}
              className="text-blue-500 hover:underline"
            >
              {register ? "Login" : "Sign up"}
            </button>
          </p>
          {/* <div className="mt-4">
            <p className="text-center text-gray-600">Or log in with:</p>
            <div className="flex justify-center mt-2">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Auth;
