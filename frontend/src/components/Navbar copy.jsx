import React, { useState } from 'react';
import {
  FaHome,
  FaPaperPlane,
  FaVideo,
  FaMicrophone,
  FaUsers,
  FaBell,
  FaUserCircle,
  FaSearch,
} from 'react-icons/fa';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="flex items-centerp-4 bg-gradient-to-r from-[#5f4aff8c] via-cyan-50 to-purple-50 p-2 drop-shadow-sm">
      {/* Left Section: Logo and Search */}
      <div className="basis-1/4 flex  items-center space-x-4 ">
        <img
          src="./assets/svg/logo.svg"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        {/* Search Bar */}
        <div className="relative">
          <div
            className={`flex items-center space-x-2 transition-all duration-300 ${
              isSearchOpen ? 'w-64' : 'w-10'
            } bg-gray-200 p-2 rounded-full lg:w-64`}
          >
            <FaSearch
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <input
              type="text"
              placeholder="Search on Fulltalk"
              className={`bg-transparent focus:outline-none ${
                isSearchOpen ? 'block' : 'hidden'
              } lg:block`}
            />
          </div>
        </div>
      </div>

      {/* Center Section: Navigation Icons */}
      <div className="basis-2/4 flex md:space-x-16 space-x-4 justify-center items-center text-2xl ">
        <FaHome />
        <FaPaperPlane />
        <FaVideo />
        <FaMicrophone />
        <FaUsers />
      </div>

      {/* Right Section: Notification and User Icons */}
      <div className="flex justify-end items-center space-x-4 basis-1/4 text-2xl">
        <FaBell />
        <FaUserCircle />
      </div>
    </nav>
  );
};

export default Navbar;
