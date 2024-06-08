"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/store/hooks";

const Popup = ({ id }) => {
  const { t } = useTranslation();
  const popupConfig = {
    profile: [
      {
        title: t("signin"),
        link: "/signin",
      },
      {
        title: t("signup"),
        link: "/signup",
      },
    ],
  };
  const elements = popupConfig[id];
  const user = useAppSelector((state) => state.session.user);
  return (
    <>
      {!user && (
        <ul className="flex gap-4 max-w-[300px] w-full">
          {elements.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Popup;
