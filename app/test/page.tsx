"use client";
import React from "react";
import Progress from "@/components/Progress";
import { VT323, Silkscreen_Regular } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import Focusing from "@/components/Focusing";

type Props = {};
export default function page({}: Props) {
  return (
    <div className="grid">
      <h2
        className={`${VT323.className} italic mt-10 text-gray-600 w-full text-center`}
      >
        These are self estimates, however I tried to be most objective
      </h2>
      <div className="grid gap-y-4 max-h-64 my-8 overflow-scroll">
        <Progress label="C" percentage={65} />
        <Progress label="HTML" percentage={80} />
        <Progress label="CSS" percentage={80} />
        <Progress label="Javascript" percentage={75} />
        <Progress label="Typescript" percentage={60} />
        <Progress label="ReactJS" percentage={70} />
        <Progress label="NextJS" percentage={60} />
        <Progress label="OpenGL" percentage={20} />
      </div>
      <Focusing />
    </div>
  );
}
