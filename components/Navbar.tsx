"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Navigation_sm from "./Navigation_sm";
import { Silkscreen_Regular } from "@/fonts";
import Burger from "./Burger";

type Props = {};

export default function Navbar({}: Props) {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 710.0) {
        // < 768 for a smooth transition when resizing
        setBurgerOpen(false);
        console.log(burgerOpen);
      }
    });
  }, []);

  return (
    <div
      className={`${Silkscreen_Regular.className} flex bg-gray-950 justify-between md:px-14 px-8 py-3 mb-5 items-center text-[#2fd0a8] border-b-[2px] border-b-[#a82fd0]`}
    >
      <Logo burgerOpen={burgerOpen} />
      {burgerOpen && <Navigation_sm />}
      <Navigation />
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
    </div>
  );
}
