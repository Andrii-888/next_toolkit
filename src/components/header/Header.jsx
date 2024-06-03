import React from "react";
import Link from "next/link";
import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <Link href={"/"}>T</Link>
         
          <NavBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
