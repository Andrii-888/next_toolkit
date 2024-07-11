"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ initialIsOpen, onToggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const config = [
    { href: "/", label: "Главная" },
    { href: `${currentLocale}/products`, label: "Товары" },
    { href: `${currentLocale}/about`, label: "О нас" },
    { href: `${currentLocale}/contact`, label: "Контакты" },
    { href: `${currentLocale}/services`, label: "Услуги" },
    { href: `${currentLocale}/faq`, label: "Часто задаваемые вопросы" },
    { href: `${currentLocale}/blog`, label: "Блог" },
    { href: `${currentLocale}/terms`, label: "Условия использования" },
    { href: `${currentLocale}/privacy`, label: "Политика конфиденциальности" },
    { href: `${currentLocale}/returns`, label: "Возвраты и обмены" },
    { href: `${currentLocale}/shipping`, label: "Доставка" },
    { href: `${currentLocale}/payments`, label: "Оплата" },
    { href: `${currentLocale}/reviews`, label: "Отзывы" },
    { href: `${currentLocale}/contact-us`, label: "Свяжитесь с нами" },
  ];

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
      if (onToggleSidebar) {
        onToggleSidebar(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSidebarOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-[97px] left-0 h-[calc(100%-60px)]
         bg-white bg-opacity-90 shadow-lg z-50 transition-transform rounded-lg 
         duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      style={{ width: "200px" }}
    >
      <ul className="py-4 px-6 space-y-4">
        {config.map((item) => (
          <li key={item.href} className="py-1">
            <Link
              href={item.href}
              className="text-gray-800 hover:text-gray-600 block"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="py-1">
          <div className="flex items-center relative">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              <path
                d="m19 19-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
            </svg>
            <input
              type="text"
              id="search-input"
              name="search"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-1 h-8 rounded-md border border-gray-300 text-base bg-gray-100 focus:outline-none focus:border-blue-400 focus:bg-white"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
