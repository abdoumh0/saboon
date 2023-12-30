"use client";
import React from "react";

type Props = {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Burger({ burgerOpen, setBurgerOpen }: Props) {
  return (
    <button
      onClick={(e) => {
        setBurgerOpen(!burgerOpen);
      }}
      className="md:hidden burger text-2xl w-[27px]"
    >
      {(burgerOpen && "X") || "<"}
    </button>
  );
}
