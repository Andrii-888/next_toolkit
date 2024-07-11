"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchLogin } from "@/store/slice/fetchSliceSessionAsync";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SigninForm = () => {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;

  const router = useRouter();
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.session.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = await dispatch(fetchLogin(data));

    if (user.payload === "invalid credentials") {
      return;
    }
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h1 className="text-3xl font-semibold mb-2 text-center text-gray-800">
          {t("Sign in")}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              {t("Email")}
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {t("Email is required.")}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              {t("Password")}
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {t("Password is required.")}
              </p>
            )}
          </div>

          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            {t("Sign In")}
          </button>
          <p className="mt-4 text-xs text-center text-gray-600">
            {t("If you don't have an account")}{" "}
            <Link
              href={`/${currentLocale}/signup`}
              className="text-indigo-600 hover:text-indigo-700"
            >
              {t("Register")}
            </Link>
          </p>
        </form>
        <div className="mt-6 text-center">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700">
            {t("Welcome to Shop")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
