import React from "react";
import LanguageChanger from "../Language/LanguageChanger";

const SearchBar = () => {
  return (
    <div className="flex mx-5 justify-center grow relative max-w-lg">
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
        placeholder="Search products..."
        className="w-full px-10 py-1 rounded-md border-2 border-solid border-[#ccc] 
        text-base bg-[#f1f1f1] duration-200 ease-in transition focus:outline-none 
        focus:border-[rgb(127, 101, 69)] focus:bg-white"
      />
      <LanguageChanger />
    </div>
  );
};

export default SearchBar;
