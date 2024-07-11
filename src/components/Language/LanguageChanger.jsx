"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";

export default function LanguageChanger() {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const lang = t("lang");
  

  const handleChange = (e) => {
    const newLocale = e.target.value === "en" ? "" : e.target.value;

    
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

   
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
    <div className="flex mx-1 justify-center grow relative max-w-lg items-center">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="h-[36px] py-0 px-1 bg-[#f1f1f1] border-[#ccc]
        text-base border-2 border-solid outline-none rounded-md duration-100
        ease-in transition focus:outline-none
        focus:bg-white"
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="it">Italiano</option>
        <option value="fr">Française</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}
