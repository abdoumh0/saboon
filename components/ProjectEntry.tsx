"use client";
import React, { useRef } from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectEntry({ description, link, title }: Props) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div
      className="border-[1px] border-black hover:border-[#a82fd0] p-2 w-[80%] md:w-[32rem] overflow-x-scroll my-5 cursor-pointer transition-colors duration-200 group"
      onClick={(e) => {
        linkRef.current?.click();
      }}
    >
      <Link
        ref={linkRef}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl group-hover:underline underline-transparent underline-offset-8 text-[#a82fd0] group-hover:text-[#2fd0a8] transition-all duration-200"
      >
        {title}
      </Link>
      <p className="my-2 text-gray-300">
        &emsp;
        {description}
      </p>
    </div>
  );
}
