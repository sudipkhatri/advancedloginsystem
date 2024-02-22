import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink as Link } from "react-router-dom";
import { protectedNav, publicNav } from "./list";

const MobileMenu = ({ isMenuOpen, onMenuToggle }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="md:hidden flex justify-center mt-3 w-screen overflow-hidden">
      <div className="absolute z-10 top-0 left-0 w-screen">
        <button
          onClick={onMenuToggle}
          className={`fixed top-0 right-0 duration-300 m-4`}
        >
          {isMenuOpen ? (
            <RxCross2 size={"30px"} />
          ) : (
            <AiOutlineMenu size={"30px"} />
          )}
        </button>

        {isMenuOpen && (
          <div className="flex flex-col px-4 bg-teal-300 shadow-lg leading-9 font-bold h-screen pt-6">
            <div className=" flex gap-3 flex-col bg-teal-300 h-auto pt-6 mt-4">
              {!isLoggedIn ? (
                publicNav?.map((list) => {
                  const { id, name, url } = list;
                  return (
                    <Link
                      key={id}
                      onClick={onMenuToggle}
                      to={url}
                      className="w-fit rounded text-lg px-5 cursor-pointer hover:underline underline-offset-4 duration-400 ease-in"
                    >
                      {name}
                    </Link>
                  );
                })
              ) : (
                <>
                  {protectedNav?.map((items) => {
                    const { id, name, url } = items;
                    return (
                      <Link
                        key={id}
                        onClick={onMenuToggle}
                        to={url}
                        className="w-fit p-2 rounded text-center px-5 cursor-pointer hover:bg-indigo-600 duration-400 ease-in"
                      >
                        {name}
                      </Link>
                    );
                  })}
                  <SignOutButton />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
