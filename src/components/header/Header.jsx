// export default Header;

// import React from "react";
// import Link from "next/link";
// import NavBar from "../navbar/NavBar";
// import SearchBar from "../searchbar";

// const Header = () => {
//   return (
//     <header
//       className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[rgb(216,216,220)]
//       py-1 border-2 border-solid border-[rgb(64,156,255)] z-10 w-full max-w-[1030px] rounded-md"
//     >
//       <div className="mx-auto my-0 px-3">
//         <nav className="flex justify-between border-[rgb(127, 101, 69)] pb-2">
//           <Link href="/">
//             <img src="/img/logo.png" alt="Logo" className="h-13 w-13" />
//           </Link>
//           <div className="flex items-center w-full justify-between">
//             <SearchBar />
//             <NavBar />
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import Link from "next/link";
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchbar";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-100  
      py-2 border-b border-gray-300 z-10 w-full max-w-7xl"
    >
      <div className="mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/img/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Tessitura Perfetta
            </span>
          </Link>
          <div className="flex-1 flex justify-center mx-4">
            <SearchBar />
          </div>
          <div className="flex items-center">
            <NavBar />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


