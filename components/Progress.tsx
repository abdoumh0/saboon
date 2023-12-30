"use client";
import React, { lazy } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { VT323 } from "@/fonts";

type Props = {
  percentage: number;
  color?: string;
  label: string;
};
export default function page({ color, label, percentage }: Props) {
  return (
    <div className={`${VT323.className} w-[70dvw] text-gray-300`}>
      <label>{label}</label>
      <ProgressBar
        ariaValuemin={0}
        ariaValuemax={100}
        completed={percentage}
        width="100%"
        animateOnRender
        initCompletedOnAnimation={0}
        transitionTimingFunction="ease-out"
        transitionDuration="1s"
        baseBgColor="#091623"
        borderRadius="0px"
        labelClassName={VT323.className + " overflow-hidden mx-4"}
      />
    </div>
  );
}
