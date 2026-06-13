import { Package } from "lucide-react";
import React from "react";

import { FaShoppingCart, FaUsers, FaTimes } from "react-icons/fa";
import { adminMenuItems } from "../../constans";

function Sidebar({ activePage, setActivePage, openSidebar, setOpenSidebar }) {
  return (
    <div
      className={`
        fixed lg:static top-0 left-0 z-50
        w-[280px] min-h-screen
        bg-dark text-light p-6
        transform transition-transform duration-300
        
        ${openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* TOP */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Admin</h1>

          <p className="text-muted text-sm mt-1">Dashboard</p>
        </div>

        {/* CLOSE BUTTON */}
        <button className="lg:hidden" onClick={() => setOpenSidebar(false)}>
          <FaTimes size={22} />
        </button>
      </div>

      {/* MENU */}
      <div className="flex flex-col gap-3">
        {adminMenuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.value}
              onClick={() => {
                setActivePage(item.value);
                setOpenSidebar(false);
              }}
              className={`
        flex items-center gap-4
        px-5 py-4 rounded-xl
        transition-all duration-200
        ${
          activePage === item.value
            ? "bg-primary text-light"
            : "hover:bg-primary/20 text-muted hover:text-light"
        }
      `}
            >
              <span>
                <Icon size={18} />
              </span>

              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
