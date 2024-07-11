"use client";
import React from "react";
import SplashScreen from "../splashscreen";
import Header from "../header";
import Sidebar from "../sidebar";
import ExampleClientComponent from "../example/ExampleClientComponent";
import ProductsList from "../productsList";
import { useAppSelector } from "@/store/hooks";

const Main = () => {
  const isSplash = useAppSelector((state) => state.theme.showSplash);
  
  if (isSplash) {
    return <SplashScreen />;
  }
  return (
    <div>
      {" "}
      <Header />
      <main className="pt-20">
        <div className="mx-auto my-0 max-w-[1024px]">
          <div>
            <aside>
              <Sidebar />
            </aside>
          </div>

          <ExampleClientComponent />
          <ProductsList />
        </div>
      </main>
    </div>
  );
};

export default Main;

//   <h1 className="text-[40px]">{t("header")}</h1>
