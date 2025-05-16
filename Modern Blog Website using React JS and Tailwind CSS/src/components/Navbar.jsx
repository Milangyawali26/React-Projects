import React from "react";
import { NavLink } from "react-router";
import {
  FaFacebook,
  FaXmark,
  FaBars,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //navitems
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/contact",
      link: "Contact",
    },
    {
      path: "/services",
      link: "Services",
    },
  ];

  return (
    <>
      <header
        className="bg-black  text-white 
fixed top-0 left-0 right-0"
      >
        <nav className="px-4 py-4 max-w-7xl mx-auto flex  items-center justify-between ">
          <a href="/" className="text-3xl font-bold text-white ">
            Design <span className="text-orange-500">DK</span>
          </a>

          {/* nav items for  medium and large devices */}
          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li className="text-white">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "ispending" : " hover:text-orange-500"
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="/" >
              <FaFacebook />
            </a>
            <a href="/" >
              <FaInstagram />
            </a>
            <a href="/" >
              <FaXTwitter />
            </a>
            <button className="bg-orange-500 px-6 py-2 font-bold rounded cursor-pointer hover:bg-white transition-all duration-200 ease-in-out">
              Log In
            </button>
          </div>

          {/* mobile menu btn , display only on mbl screen */}
          <div className="md:hidden items-center">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <FaXmark className="w-7 h-7" />
              ) : (
                <FaBars className="w-7 h-7" />
              )}
            </button>
          </div>
        </nav>
        {/*  menu items only for mobile */}
        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-5 mt-15 bg-white ${
              isMenuOpen
                ? "fixed top-0 left-0 w-full transition-all ease-out duration-200"
                : "hidden"
            }`}
          >
            {navItems.map(({ path, link }) => (
              <li className="text-black  hover:text-orange-500 ">
                <NavLink onClick={toggleMenu} to={path}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
