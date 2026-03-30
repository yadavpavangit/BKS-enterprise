import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="overflow-hidden text-white px-10 py-2 bg-linear-to-r from-blue-700 to-blue-600">
      <nav className="flex items-center justify-between">
        <h3 className="font-brand font-bold bg-linear-to-r from-blue-600 via-white to-indigo-500 bg-clip-text text-transparent text-5xl">
          BKS
        </h3>
        <ul className="hidden sm:flex gap-4 font-source">
          <li className="text-xl font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-xl font-semibold">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-xl font-semibold">
            <a href="#">Services</a>
          </li>
        </ul>
        <button
          className="block sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>

        {/* MOBILE */}
        <ul
          className={`fixed w-full h-screen bg-linear-to-r from-blue-500 to-blue-700 bottom-0 right-0 flex flex-col justify-center items-center gap-4 px-3 ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-all duration-150`}
        >
          <button
            className="absolute top-0 left-0 text-3xl pl-4 pt-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            X
          </button>
          <li className="text-xl font-semibold">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="text-xl font-semibold">
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="text-xl font-semibold">
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
