"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchLogin } from "@/store/slice/fetchSliceSessionAsync";

import React from "react";
import { useForm } from "react-hook-form";

const SigninForm = () => {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email", { required: true })} />
          {errors.email && <p>Email is required.</p>}
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
        {error && <p>{error}</p>}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SigninForm;
