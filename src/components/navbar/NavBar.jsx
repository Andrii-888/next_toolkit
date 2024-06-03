"use client";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React from "react";
import LanguageChanger from "../Language/LanguageChanger";
import { useTranslation } from "react-i18next";

const i18nNamespaces = ["header"];

const NavBar = () => {
  const { t } = useTranslation();
  console.log(t);
  const user = useAppSelector((state) => state.session.user);
  const linkConfig = [
    {
      title: t("signin"),
      link: "/signin",
    },
    {
      title: t("signup"),
      link: "/signup",
    },
  ];
  return (
    <div>
      {!user && (
        <ul>
          {linkConfig.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {user && <Link href="/profile">Cabinet</Link>}
      <LanguageChanger />
    </div>
  );
};

export default NavBar;
