import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Context
import { ToggleContext } from "../../context/ToggleContext";

function Navbar() {
  const { toggleNavbar } = useContext(ToggleContext);

  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  return (
    <header className="grid grid-flow-col justify-between h-fit p-4 border-b-2 border-solid border-black items-center">
      <section className="pl-2 no__highlights">
        <Link to="/">
          <div className="font-bold text-2xl">WS</div>
        </Link>
      </section>

      {/* Phone Nav */}
      <nav
        onClick={() => {
          toggleNavbar();
        }}
        className="md:hidden no__highlights"
      >
        <span className="cursor-pointer text-white hover:text-hover-grey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125"
            data-te-animation-init
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </nav>

      {/* Monitor Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-4">
          <li className={activeNav === "/" ? "selected__link" : "nav__link"}>
            <Link to="/"><span>Home</span></Link>
          </li>
          
          <li className={activeNav === "/beta-test-questions" ? "selected__link" : "nav__link"}>
            <Link to="/beta-test-questions"><span>Beta Mode</span></Link>
          </li>
          <li className={activeNav === "/course" ? "selected__link" : "nav__link"}>
            <Link to="/course"><span>Course</span></Link>
          </li>
          <li className={activeNav === "/account" ? "selected__link" : "nav__link"}>
            <Link to="/account"><span>Account</span></Link>
          </li>
          <li className={activeNav === "/login" ? "selected__link" : "nav__link"}>
            <Link to="/login"><span>Login</span></Link>
          </li>
          <li className={activeNav === "/sign-up" ? "selected__link" : "nav__link"}>
            <Link to="/sign-up"><span>Sign Up</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
