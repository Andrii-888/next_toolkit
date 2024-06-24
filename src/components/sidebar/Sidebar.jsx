"use client";
import React, { useState } from "react";

const Sidebar = ({ initialIsOpen, onToggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialIsOpen);

  const handleToggleSidebar = () => {
    const newIsOpen = !isSidebarOpen;
    setIsSidebarOpen(newIsOpen);
    if (onToggleSidebar) {
      onToggleSidebar(newIsOpen);
    }
  };

  return (
    <>
      <div
        className={`fixed top-1/2 left-0 transform -translate-y-1/2 bg-opacity-90 shadow-lg z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="py-2 px-4 bg-white rounded-md">
          <li className="py-1">
            <a href="#home" className="text-black hover:text-gray-700 block">
              Home
            </a>
          </li>
          <li className="py-1">
            <a
              href="#services"
              className="text-black hover:text-gray-700 block"
            >
              Services
            </a>
          </li>
          <li className="py-1">
            <a href="#about" className="text-black hover:text-gray-700 block">
              About
            </a>
          </li>
          <li className="py-1">
            <a href="#contact" className="text-black hover:text-gray-700 block">
              Contact
            </a>
          </li>
          <li className="py-1">
            <div className="flex items-center relative">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
              </svg>
              <input
                type="text"
                id="search-input"
                name="search"
                placeholder=""
                className="w-full pl-10 pr-3 py-1 h-8 rounded-md border-2 border-solid border-[#ccc] 
                          text-base bg-[#f1f1f1] duration-200 ease-in transition focus:outline-none 
                          focus:border-[rgb(127, 101, 69)] focus:bg-white"
                style={{ width: "150px" }} // width same as links
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="fixed top-4 left-4 z-50">
        <button onClick={handleToggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
