"use client";
import React from "react";
import Navigation_sm from "./Navigation_sm";

type Props = {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Burger({ burgerOpen, setBurgerOpen }: Props) {
  return (
    <>
      {burgerOpen && <Navigation_sm />}
      <button
        onClick={(e) => {
          setBurgerOpen(!burgerOpen);
        }}
        className="md:hidden text-2xl w-[27px]"
      >
        {(burgerOpen && "X") || "<"}
      </button>
    </>
  );
}
