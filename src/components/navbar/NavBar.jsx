"use client";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React, { useState } from "react";
import LanguageChanger from "../Language/LanguageChanger";
import { useTranslation } from "react-i18next";
import Popup from "../popup";
// import SearchBar from "../searchbar";

const i18nNamespaces = ["header"];

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const [isPopup, setPopup] = useState(false);
  const user = useAppSelector((state) => state.session.user);
  const linkConfig = [
    {
      title: "/img/iconsprofile.png",
      onClick: (id) => setPopup(id),
      id: "profile",
    },
    {
      title: "/img/box.png",
      link: `/${currentLocale}/cart`,
      id: "cart",
    },
  ];
  return (
    <div className=" flex gap-4 max-w-[350px] w-full">
      <LanguageChanger />
      {!user && (
        <ul className="flex gap-4 max-w-[300px] w-full">
          {linkConfig.map((item) => (
            <li key={item.id}>
              {item.link && (
                <Link href={item.link}>
                  {" "}
                  <img src={item.title} />
                </Link>
              )}
              {item.onClick && (
                <img src={item.title} onClick={() => item.onClick(item.id)} />
              )}
            </li>
          ))}
        </ul>
      )}
      {user && <Link href="/profile">Cabinet</Link>}
      {isPopup && <Popup id={isPopup} />}
    </div>
  );
};

export default NavBar;
