"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Information = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-semibold mb-4 text-center text-gray-800">
          Information
        </h1>
        <p className="text-gray-700 text-lg">
          Welcome to our application. Here you will find all the information you
          need.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>Feature 1: Description of feature 1.</li>
          <li>Feature 2: Description of feature 2.</li>
          <li>Feature 3: Description of feature 3.</li>
          <li>Feature 4: Description of feature 4.</li>
        </ul>
        <div className="mt-6">
          <button
            onClick={() => alert("Thank you for visiting!")}
            className="px-6 py-3 bg-indigo-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Learn More
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700">
            {t("Continue Shopping")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Information;
