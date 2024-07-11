"use client";
import { useAppDispatch } from "@/store/hooks";
import { setShowSplash } from "@/store/slice/themeSlice";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        dispatch(setShowSplash(false));
      }, 1000);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center h-screen bg-[rgb(216,216,220)] relative">
      <img
        src="/img/logo2.png"
        alt="Logo2"
        className={`animate-bounce drop-shadow-lg ${
          animate ? "animate-fly-to-corner" : ""
        }`}
      />
    </div>
  );
};

export default SplashScreen;

