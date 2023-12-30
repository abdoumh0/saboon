"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Silkscreen_Regular } from "@/fonts";
import Burger from "./Burger";

type Props = {};

export default function Navbar({}: Props) {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  return (
    <div
      className={`${Silkscreen_Regular.className} flex  bg-gray-950 justify-between sm:px-14 px-8 py-3 mb-5 align-middle text-[#2fd0a8] border-b-[2px] border-b-[#a82fd0]`}
    >
      <Logo burgerOpen={burgerOpen} />
      <Navigation />
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
    </div>
  );
}
