import React from "react";
import Link from "next/link";
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchbar";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 
    py-1 border-2 border-solid border-[rgb(127, 101, 69)] rounded-lg"
    >
      <div className="mx-auto my-0 max-w-[1024px] px-3">
        <nav className=" flex justify-between items-center">
          <Link href={"/"}>
            <img src="/img/logo.png" />
          </Link>
          <SearchBar />

          <NavBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
