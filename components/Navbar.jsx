import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // New state to handle scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 60px, mark as scrolled
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav  
  className={`
    ${styles.paddingX}
    w-full flex items-center py-5 fixed top-0 z-20
    transition-colors duration-300
    ${
      isScrolled 
        ?  "bg-[linear-gradient(rgba(10,30,10,0.97),rgba(5,20,5,0.97))]"  // 40% opacity green gradient
        : "bg-transparent"
    }
  `}
>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="flex-1 flex justify-start items-center">
          <Link 
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
            <p className="text-white text-[35px] font-dancing cursor-pointer">
              Aryan
            </p>
          </Link> 
        </div>

        {/* (Optional) Desktop Menu - commented out for now */}
        {/* 
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-secondary hover:text-white ${
                active === nav.title ? "text-white" : ""
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul> 
        */}

        {/* Mobile Menu Icon + Dropdown */}
        <div className="justify-end">
        <img
  src={toggle ? close : menu}
  alt={menu}
  className="w-[28px] h-[28px] object-contain cursor-pointer"
  style={{ filter: "brightness(0.5)" }}
  onClick={() => setToggle(!toggle)}
/>

          <div
            className={`${  
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
