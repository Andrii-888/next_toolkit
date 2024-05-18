"use client";
import { toggleTheme } from "@/lib/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${currentTheme}`}
      style={{ textAlign: "center", marginTop: 50 }}
    >
      <h1 style={{ textAlign: "center", marginTop: 50 }}>About Page</h1>
      <br />
      <br />
      <br />
      <p>Current theme: {currentTheme}</p>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(toggleTheme())}>
        Update theme color
      </button>
      <br /> <br />
      <Link href="/" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Back to home</h2>
      </Link>
      <Link href="/contact" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Go to contact</h2>
      </Link>
    </div>
  );
}
