import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
import LogOutButton from "../Auth/LogoutButton";

const DesktopMenu = ({ onDropdownToggle, isDropdownOpen }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="container mx-auto flex justify-between items-center">
      <NavLink
        className="flex gap-1 justify-center items-center pl-6 sm:pl-2"
        to={"/"}
      >
        <MdOutlineSecurity size={30} />
        <div className="flex flex-col">
          <h2 className="text-base font-semibold">
            {" "}
            Auth <span className="text-indigo-600">Apps</span>{" "}
          </h2>
          <span className="text-xs">Securing IT Solutions</span>
        </div>
      </NavLink>
      <ul className="hidden md:flex justify-center items-center space-x-2">
        <li>
          {isLoggedIn ? (
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive
                  ? "block w-[80px] text-center text-white bg-indigo-600 p-2 px-2 rounded transition ease-in duration-500"
                  : "block w-[80px] text-center p-2 px-2"
              }
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block w-[80px] text-center text-white bg-indigo-600 p-2 px-2 rounded transition ease-in duration-500"
                  : "block w-[80px] text-center p-2 px-2"
              }
            >
              Home
            </NavLink>
          )}
        </li>

        <li>
          {isLoggedIn ? (
            <LogOutButton />
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "block w-[80px] text-center text-white bg-indigo-600 p-2 px-2 rounded transition ease-out duration-500"
                  : "block w-[80px] text-center p-2 px-2"
              }
            >
              Login
            </NavLink>
          )}
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "block w-[80px] text-center text-white bg-indigo-600 p-2 px-2 rounded transition ease-out duration-500"
                  : "block w-[80px] text-center p-2 px-2"
              }
            >
              Register
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
