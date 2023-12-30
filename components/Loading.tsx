"use client";
import React, { useState, useEffect } from "react";
import { Silkscreen_Regular } from "@/fonts";

type Props = {};

export default function Loading({}: Props) {
  const [dots, setDots] = useState("···");
  useEffect(() => {
    const t = setTimeout(() => {
      setDots((prev) => {
        if (prev.length < 3) {
          return prev + "·";
        } else {
          return "";
        }
      });
    }, 530);
    return () => clearTimeout(t);
  }, [dots]);
  return (
    <div
      className={`${Silkscreen_Regular.className} flex text-[#a82fd0] select-none text-8xl items-center justify-center h-[100%] w-[100%] mx-auto my-auto`}
    >
      {dots}
    </div>
  );
}
