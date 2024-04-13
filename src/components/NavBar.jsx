import { useState } from "react";

import { close, logo, menu } from "../assets/assets";
import { navLinks } from "../constants";


// navigation bar component 
const Navbar = () => {
  // a useState hook to toggle activate the current navigation bar or clicked one
  const [active, setActive] = useState("Home");
  // a useState hook to toggle between small screen and large screen 

  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" backg flex p-6  w-full justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    {/* function to iterate through the nav items */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-black" : "text-dimBlack"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
     
      </ul>
   {/* navigation bar for small screen*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[100%]  rounded-xl sidebar`}
        >
          <ul className="list-none bg-lime-600 flex justify-center py-10 items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimBlack"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
      <div>
        
      </div>
    </nav>
  );
};

export default Navbar;