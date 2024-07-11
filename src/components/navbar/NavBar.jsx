"use client";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const user = useAppSelector((state) => state.session.user);
  const cartItemCount = useAppSelector((state) =>
    state.products.cart.reduce((total, item) => total + item.count, 0)
  );

  const linkConfig = [
    {
      title: "/img/information.png",
      link: `/${currentLocale}/information`,
      id: "information",
      label: "Inform",
    },
    {
      title: "/img/pamphlet.png",
      link: `/en/payment`,
      id: "payment",
      label: "Payment",
    },
    {
      title: "/img/profile.png",
      link: `/${currentLocale}/signin`,
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
      {!user && (
        <ul className="flex gap-4 ml-auto">
          {linkConfig.map((item) => (
            <li
              key={item.id}
              className="relative group flex flex-col items-center"
            >
              <Link href={item.link} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={item.title}
                    className="h-12 w-12 border border-gray-200 rounded-lg shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  {item.id === "cart" && cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ease-in-out text-gray-700 text-xs bg-white p-1 rounded shadow-md mt-1"
                >
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {user && (
        <Link href={`/${currentLocale}/profile`} className="ml-auto">
          Cabinet
        </Link>
      )}
    </div>
  );
};

export default NavBar;
