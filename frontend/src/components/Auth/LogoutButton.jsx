import { useMutation, useQueryClient } from "react-query";
import { logout } from "../../api/handleApis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { toast } from "react-toastify";

const SignOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation(logout, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      toast.success("Logout success")
      navigate("/");
      dispatch(authActions.logout());
    },
    onError: async (error) => {
      toast.error(error);
      console.log(error);
    },
  });
  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="block w-[100px] text-center text-white bg-red-600 p-2 px-2 rounded transition ease-in duration-500"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
