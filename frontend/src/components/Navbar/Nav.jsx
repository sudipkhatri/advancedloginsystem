import { NavLink as Link } from "react-router-dom";

const Nav = ({ name, url }) => {
  return (
    <Link
      //   onClick={onClick}
      to={url}
      className={({ isActive }) =>
        isActive
          ? "block w-[80px] text-center text-white bg-teal-400 p-2 px-2 rounded transition ease-out duration-500"
          : "block w-[80px] text-center p-2 px-2"
      }
    >
      {name}
    </Link>
  );
};

export default Nav;
