"use client";
import Home from "@/app/page";
import React from "react";
import { useState } from "react";

const Tab = () => {
  const [tab, setTab] = useState("Home");
  const confige = [
    {
      title: "Home",
      id: "Home",
    },
    {
      title: "Hotel",
      id: "Hotel",
    },
    {
      title: "Children",
      id: "Children",
    },
  ];
  return (
    <div>
      <ul>
      {}
      </ul>
    </div>
  );
};

export default Tab;
