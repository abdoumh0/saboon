import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Silkscreen_Regular } from "@/fonts";
import Burger from "./Burger";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div
      className={`${Silkscreen_Regular.className} flex bg-gray-950 justify-between px-14 py-3 mb-5 align-middle text-[#2fd0a8] border-b-[2px] border-b-[#a82fd0]`}
    >
      <Logo />
      <Navigation />
      <Burger />
    </div>
  );
}
