"use client";
import React, { useEffect, useState } from "react";
import works from "./work.json";
import { VT323 } from "@/fonts";
import ProjectEntry from "@/components/ProjectEntry";

type Props = {};

type Work = {
  title: string;
  description: string;
  link: string;
};

export default function page({}: Props) {
  const [dots, setDots] = useState("···");
  const [work, setWord] = useState<Work[]>(works);

  return (
    <div className={`${VT323.className} text-left w-full`}>
      {work.toReversed().map((v, k) => {
        return <ProjectEntry key={k} {...v} />;
      })}
    </div>
  );
}
