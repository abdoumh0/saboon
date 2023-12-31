"use client";
import React, { useEffect, useState } from "react";
import { Silkscreen_Regular } from "@/fonts";

type Props = {};

export default function page({}: Props) {
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
      className={`${Silkscreen_Regular.className} text-gray-600 text-5xl grid gap-y-4`}
    >
      <div className="mx-auto w-fit">[{dots}]</div>
      <div className="">Coming soon</div>
    </div>
  );
}
