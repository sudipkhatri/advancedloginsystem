import { useMutation } from "react-query";
import { useState } from "react";
import { register } from "../../api/handleApis";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Register = () => {
  const [passError, setPassError] = useState("");
  const [emailError, setemailError] = useState("");
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const {
    mutate,
    isError: isLoginError,
    isPending,
    error: loginError,
    reset,
  } = useMutation({
    mutationFn: register,
    onMutate: () => {},
    onSuccess: (data) => {
      if (data) {
        navigate("/welcome");
        dispatch(authActions.login({}));
      } else {
        // navigate("/register");
        console.log("error");
      }
    },
    onError: (error) => {
      console.log(error.message);
      setemailError(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(input.email);
    if (input.password.length <= 6) {
      setPassError("Password must be greater than 6 character");
      return;
    } else if (input.password !== input.confirmPassword) {
      setPassError("Password doesn't match");
      return;
    } else if (!isValidEmail) {
      setemailError("Invalid email!");
      return;
    } else {
      mutate(input);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-teal-500 bg-clip-text">
              SignUp
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
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
            {emailError && <span className="text-red-600"> {emailError} </span>}
            <div className="mb-6 mt-1">
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
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            {passError && <span className="text-red-600">{passError}</span>}
            <div className="flex mt-1 items-center justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                SignUp
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Already a user?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
