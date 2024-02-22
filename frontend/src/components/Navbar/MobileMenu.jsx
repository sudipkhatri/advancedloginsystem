import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink as Link } from "react-router-dom";

const MobileMenu = ({ isMenuOpen, onMenuToggle }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:hidden flex justify-center mt-3 w-full">
      <div className="absolute z-10 top-23 w-full">
        <button
          onClick={onMenuToggle}
          className={`fixed top-0 right-0 duration-300 m-4 ${
            isScrolled ? "hidden" : ""
          }`}
        >
          {isMenuOpen ? (
            <RxCross2 size={"30px"} />
          ) : (
            <AiOutlineMenu size={"30px"} />
          )}
        </button>

        {isMenuOpen && (
          <div className="flex flex-col bg-gray-100 shadow-lg leading-9 font-bold min-h-[60vh] h-auto pt-3">
            <div
              className="
              flex flex-col 
              bg-gray-100 shadow-lg  min-h-[80vh] h-auto pt-3"
            >
              {isLoggedIn ? (
                <Link
                  onClick={onMenuToggle}
                  to="/user"
                  className="block p-2 pl-5 cursor-pointer hover:bg-indigo-600 duration-400 ease-in hover:text-white"
                >
                  Profile
                </Link>
              ) : (
                <Link
                  onClick={onMenuToggle}
                  to="/"
                  className="block p-2 pl-5 cursor-pointer hover:bg-indigo-600 duration-400 ease-in hover:text-white"
                >
                  Home
                </Link>
              )}
              {isLoggedIn ? (
                <Link
                  onClick={onMenuToggle}
                  to="/logout"
                  className="block p-2 pl-5 hover:bg-indigo-600 duration-400 ease-in hover:text-white"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  onClick={onMenuToggle}
                  to="/login"
                  className="block p-2 pl-5 hover:bg-indigo-600 duration-400 ease-in hover:text-white"
                >
                  Login
                </Link>
              )}

              {!isLoggedIn && (
                <Link
                  onClick={onMenuToggle}
                  to="/register"
                  className="block p-2 pl-5 hover:bg-indigo-600 duration-400 ease-in hover:text-white duration-3000 "
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
