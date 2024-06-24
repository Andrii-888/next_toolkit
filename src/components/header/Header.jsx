import React from "react";
import Link from "next/link";
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchbar";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 bg-[rgb(216,216,220)]  
      py-1 border-2 border-solid border-[rgb(64,156,255)] z-10"
    >
      <div className="mx-auto my-0 max-w-[1024px] px-3">
        <nav className="flex justify-between border-[rgb(127, 101, 69)] pb-2">
          <Link href={"/"}>
            <img src="/img/logo.png" alt="Logo" />
          </Link>
          <div className="flex items-center grow">
            <SearchBar />
            <NavBar />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
