"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";
// import { current } from "@reduxjs/toolkit";

export default function LanguageChanger() {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const lang = t("lang");
  console.log(lang.split(" "));

  const handleChange = (e) => {
    const newLocale = e.target.value === "en" ? "" : e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      className="bg-[#f1f1f1] max-w-[120px] w-full border-[#ccc] text-base border-2 border-solid
      outline-none rounded-md p-3 py-1  
      duration-200 ease-in transition focus:outline-none focus:border-[rgb(127, 101, 69)] focus:bg-white"
    >
      <option value="en">En</option>
      <option value="de">De</option>
      <option value="it">It</option>
      <option value="fr">Fr</option>
      <option value="ru">Ru</option>
    </select>
  );
}
