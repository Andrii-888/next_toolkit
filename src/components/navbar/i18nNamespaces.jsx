"use client";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React, { useState } from "react";
import LanguageChanger from "../Language/LanguageChanger";
import { useTranslation } from "react-i18next";
import Popup from "../popup";

const i18nNamespaces = ["header"];
const NavBar = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [isPopup, setPopup] = useState(false);
  const user = useAppSelector((state) => state.session.user);
  const linkConfig = [
    {
      title: "/img/profile.png",
      onClick: (id) => setPopup(id),
      id: "profile",
      label: "Profile",
    },
    {
      title: "/img/heart.png",
      link: `/${currentLocale}/favorites`,
      id: "favorites",
      label: "Favorites",
    },
    {
      title: "/img/cart-black.png",
      link: `/${currentLocale}/cart`,
      id: "cart",
      label: "Cart",
    },
  ];

  return (
    <div className="flex justify-between items-center max-w-[350px] w-full">
      <LanguageChanger />
      {!user && (
        <ul className="flex gap-4 ml-auto">
          {linkConfig.map((item) => (
            <li key={item.id} className="flex relative group">
              {item.link && (
                <Link href={item.link}>
                  <img
                    src={item.title}
                    className={`transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      item.id !== "profile"
                        ? "h-12 w-12 border border-gray-200 rounded-lg shadow-sm"
                        : ""
                    }`}
                  />
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
                  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 
                  ease-in-out text-gray-700 text-xs bg-white p-1 rounded shadow-md"
                  >
                    {item.label}
                  </div>
                </Link>
              )}
              {item.onClick && (
                <>
                  <img
                    src={item.title}
                    onClick={() => item.onClick(item.id)}
                    className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      item.id === "profile"
                        ? "h-12 w-12 border border-gray-200 rounded-lg shadow-sm"
                        : ""
                    }`}
                  />
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
                  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 
                  ease-in-out text-gray-700 text-xs bg-white p-1 rounded shadow-md"
                  >
                    {item.label}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      {user && (
        <Link href="/profile" className="ml-auto">
          Cabinet
        </Link>
      )}
      {isPopup && <Popup id={isPopup} />}
    </div>
  );
};
export default NavBar;
