import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Playfair_Display_400 } from "@/app/fonts";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div
      className={`${Playfair_Display_400.className} flex bg-[#2F3947] justify-between px-14 py-3 mb-5 align-middle text-[#2fd0a8] border-b-[2px] border-b-[#a82fd0]`}
    >
      <Logo />
      <Navigation />
    </div>
  );
}
