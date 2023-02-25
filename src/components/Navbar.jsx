import React, { useState } from "react";
import logo from "../assets/ChatFlow.png";
import { navLinks } from "../constans";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="py-8 md:py-0 md:pt-[58px]">
      <div className="hidden md:flex justify-center items-center ">
        <span className="w-[171px]">
          <img src={logo} alt="" />
        </span>
        <ul className="flex gap-[50px] flex-1">
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={`#${link.name}`}
                  className="text-[#FFFFFFCC] hover:text-white "
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="cta-wrapper flex">
          <button className="flex justify-center items-center py-2 px-5 rounded-md text-white">
            Login
          </button>
          <button className="flex justify-center items-center py-2 px-5 rounded-md bg-[#FFFFFF8C] text-[#0D082C]">
            Register
          </button>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center">
        <span className="w-[171px]">
          <img src={logo} alt="" />
        </span>
        <span onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <FiX className="text-white" size={24} />
          ) : (
            <FiMenu className="text-white" size={24} />
          )}
        </span>
        <div
          className={`${
            toggle ? "flex flex-col" : "hidden"
          } absolute top-20 right-4`}
        >
          <ul className="flex flex-col gap-[30px] flex-1 p-6 min-w-[140px] rounded-md bg-gray-900">
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  <a
                    href={`#${link.name}`}
                    className="text-[#FFFFFFCC] hover:text-white "
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
