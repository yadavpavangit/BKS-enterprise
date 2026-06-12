import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="overflow-hidden text-white px-10 py-2 bg-linear-to-r from-blue-700 to-blue-600">
      <nav className="flex items-center justify-between">
        <img
          src="./favicon.png"
          alt="Logo"
          className="h-16 w-16 object-fit-contain"
        />

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

          {/* MOBILE */}
          <ul
            className={`fixed inset-0 z-99 w-full h-screen bg-linear-to-r from-blue-500 to-blue-700 bottom-0 right-0 flex flex-col justify-center items-center gap-10 px-3 ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-all duration-150`}
          >
            <button
              className="absolute top-12 left-1/2 transform -translate-x-1/2 text-3xl p-4"
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
