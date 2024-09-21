import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 z-50">
      <div className="container flex items-center justify-between">
        {/* Navigation Links */}
        <ul className="ml-12 flex items-center space-x-6">
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "text-blue-400 text-base font-semibold transition duration-200"
                  : "text-white text-base font-semibold hover:text-gray-300 transition duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/slideshow"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "text-blue-400 text-base font-semibold transition duration-200"
                  : "text-white text-base font-semibold hover:text-gray-300 transition duration-200"
              }
            >
              SlideShow
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
