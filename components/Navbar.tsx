"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Silkscreen_400 } from "@/fonts";
import Burger from "./Burger";

type Props = {};

export default function Navbar({}: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(1200);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`${Silkscreen_400.className} flex bg-gray-950 justify-between px-14 py-3 mb-5 align-middle text-[#2fd0a8] border-b-[2px] border-b-[#a82fd0]`}
    >
      <Logo />
      {windowWidth > 720 ? <Navigation /> : <Burger />}
    </div>
  );
}
