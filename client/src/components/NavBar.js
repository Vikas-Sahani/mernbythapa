import React, { useState } from "react";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BiSolidRegistered } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: <AiFillHome />, link: "/" },
    { name: <AiFillPhone />, link: "/contact" },
    { name: <FcAbout />, link: "/about" },
    { name: <BiSolidRegistered />, link: "/register" },
    { name: <FaKey />, link: "/login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Vikas Developer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link, i) => {
            return (
              <li key={i} className="md:ml-8 text-xl md:my-0 my-7 md:w-20">
                <NavLink
                  to={link.link}
                  className="md:text-4xl text-blue-500 hover:opacity-50 hover:rounded-full hover:bg-blue-800 duration-500"
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          {/* <button>Get Started</button> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
