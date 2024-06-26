"use client";
import { toggleTheme } from "@/store/slice/themeSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";

function ThemeToggle() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(toggleTheme())}>
        Update theme color
      </button>
    </div>
  );
}

export default ThemeToggle;
