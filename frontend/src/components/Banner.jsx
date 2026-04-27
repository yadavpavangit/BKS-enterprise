import { MdDoubleArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Banner({ title }) {
  return (
    <div className="w-full h-80 relative bg-red-600">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-black/40 to-gray-800" />
      <img
        src="./images/about-ro.jpeg"
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="w-full px-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <h2 className="text-2xl md:text-5xl font-bold">{title}</h2>
          <div className="font-poppins flex items-center gap-2">
            <NavLink
              to={"/"}
              className="font-bold text-red-500 hover:text-red-700 transition-colors duration-150 ease-in"
            >
              Home
            </NavLink>
            <MdDoubleArrow />
            <span className="text-lg font-bold">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
