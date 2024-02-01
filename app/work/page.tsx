import React from "react";
import works from "./work.json";
import { VT323 } from "@/fonts";
import ProjectEntry from "@/components/ProjectEntry";

type Props = {};

type Work = {
  title: string;
  description: string;
  link: string;
};

works.reverse();

export default function page({}: Props) {
  return (
    <div className={`${VT323.className} text-left w-full`}>
      {works.map((v, k) => {
        return <ProjectEntry key={k} {...v} />;
      })}
    </div>
  );
}
