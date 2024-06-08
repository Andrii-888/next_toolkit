import React from "react";

const SearchBar = () => {
  return (
    <div className=" flex mx-5 justify-center grow">
      <input
        type="text"
        id="search-input"
        name="search"
        placeholder="Search products..."
        className=" w-full max-w-lg px-2 py-1 rounded-md border-2 
        border-solid border-[#ccc] text-base 
        bg-[#f1f1f1] duration-200 ease-in transition focus:outline-none 
        focus:border-[rgb(127, 101, 69)] focus:bg-white"
      />
    </div>
  );
};

export default SearchBar;
