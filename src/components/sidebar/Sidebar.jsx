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
    <div className="mt-6">
      <button className="menu-button" onClick={handleToggleSidebar}>
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      <ul
        className="absolute top-5 left-5 bg-zinc-400 text-white
      border-none py-2.5 px-5 cursor-pointer rounded-md hover:bg-slate-600"
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
