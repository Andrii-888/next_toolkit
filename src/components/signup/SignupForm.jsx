"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { fetchSignup } from "@/store/slice/fetchSliceSessionAsync";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";

const SignupForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.session.error);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" {...register("fullName", { required: true })} />
        {errors.fullName && <p>Full name is required.</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email", { required: true })} />
        {errors.email && <p>Email is required.</p>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <p>Please enter a valid phone number.</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password is required.</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      {error && <p>{error}</p>}
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignupForm;
