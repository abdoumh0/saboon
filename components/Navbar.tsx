"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Navigation_sm from "./Navigation_sm";
import { Silkscreen_Regular } from "@/fonts";
import Burger from "./Burger";

type Props = {};

export default function Navbar({}: Props) {
  const [burgerShouldOpen, setBurgerShouldOpen] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 710.0) {
        // < 768 for a smooth transition when resizing
        setBurgerShouldOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    if (burgerShouldOpen) {
      setTimeout(() => {
        setBurgerOpen(true);
      }, 211);
    } else {
      setBurgerOpen(false);
    }
  }, [burgerShouldOpen]);

  return (
    <div
      className={`${Silkscreen_Regular.className} flex navbar bg-gray-950 justify-between md:px-14 px-4 py-3 mb-4 items-center align-middle text-[#2fd0a8] border-b-[2px] border-b-[#a82fd0] min-h-10 md:min-h-14`}
    >
      {!burgerOpen && <Logo burgerOpen={burgerShouldOpen} />}
      {burgerOpen && <Navigation_sm />}
      <Navigation />
      <Burger
        burgerOpen={burgerShouldOpen}
        setBurgerOpen={setBurgerShouldOpen}
      />
    </div>
  );
}
