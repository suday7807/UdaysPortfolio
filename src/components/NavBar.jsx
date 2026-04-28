import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="text-3xl sm:text-5xl font-signature ml-2">Uday Singh</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium">
            <Link
              to={link}
              smooth
              duration={500}
              spy
              offset={-80}
              activeClass="text-cyan-400 border-b-2 border-cyan-400"
              className="text-gray-400 hover:text-white inline-block duration-200 pb-1"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-5 text-3xl">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
