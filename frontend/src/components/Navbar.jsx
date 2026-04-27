import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { PiTrolleyFill } from "react-icons/pi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="overflow-hidden text-white px-10 py-2 bg-linear-to-r from-blue-700 to-blue-600">
      <nav className="flex items-center justify-between">
        <h3 className="font-brand font-bold bg-linear-to-r from-blue-600 via-white to-indigo-500 bg-clip-text text-transparent text-5xl">
          BKS
        </h3>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-7 font-source">
            <li className="text-xl font-semibold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <CiMenuFries size={20} />
          </button>
          <PiTrolleyFill />

          {/* MOBILE */}
          <ul
            className={`fixed z-99 w-full h-screen bg-linear-to-r from-blue-500 to-blue-700 bottom-0 right-0 flex flex-col justify-center items-center gap-10 px-3 ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-all duration-150`}
          >
            <button
              className="absolute top-0 left-0 text-3xl pl-4 pt-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IoClose size={40} />
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
              <NavLink to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
