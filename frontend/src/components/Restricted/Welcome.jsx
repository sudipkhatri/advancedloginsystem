import { getUser } from "../../api/handleApis";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Get user info by token in localStorage. If there is no token, redirect to login page.
  const response = useQuery("userValidation", getUser, {
    onError: () => {
      toast.error("Unauthorized. Navigating to login page!");
      dispatch(authActions.logout({}));
      navigate("/login");
      return;
    },
  });

  if (!response.data) {
    return (
      <div className="flex justify-center items-center w-screen h-screen text-red-600">
        !Unauthorized
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <h2>Welcome!!</h2>
      </div>
      <div className="flex">
        <h2>Welcome!!</h2>
      </div>
    </div>
  );
};

export default Welcome;
