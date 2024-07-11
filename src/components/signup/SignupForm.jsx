"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { fetchSignup } from "@/store/slice/fetchSliceSessionAsync";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SignupForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.session.error);

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = await dispatch(fetchSignup(data));
    if (user) {
      router.push("/");
    }
  };

  // Watch the password field
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300"
    >
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          {t("Sign up")}
        </h1>
       
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-gray-700"
        >
          {t("Full Name")}
        </label>
        <input
          id="fullName"
          {...register("fullName", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-600">
            {t("Full name is required.")}
          </p>
        )}
      </div>

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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{t("Email is required.")}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-semibold text-gray-700"
        >
          {t("Phone Number")}
        </label>
        <input
          id="phoneNumber"
          {...register("phoneNumber", { required: true })}
          type="tel"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.phoneNumber && (
          <p className="mt-2 text-sm text-red-600">
            {t("Please enter a valid phone number.")}
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">
            {t("Password is required.")}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-semibold text-gray-700"
        >
          {t("Confirm Password")}
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === password || t("Passwords do not match"),
          })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t("Sign Up")}
        </button>
        <p className="mt-4 text-xs text-center text-gray-600">
          {t("If you have an account")}{" "}
          <Link
            href={`/${currentLocale}/signin`}
            className="text-indigo-600 hover:text-indigo-700"
          >
            {t("Login")}
          </Link>
        </p>
      </div>
      <div className="mt-6 text-center">
        <Link href="/" className="text-indigo-600 hover:text-indigo-700">
          {t("Welcome to Shop")}
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
