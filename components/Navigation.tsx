"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next13-progressbar";

type Props = {};

export default function Navigation({}: Props) {
  const router = useRouter();
  const gpath = usePathname().slice(1) + "/";
  const routes = ["Code", "About", "Skills", "Contact"];

  return (
    <ul className="hidden md:flex justify-between space-x-5 navigation fadein nav-sm">
      {routes.map((path, key) => (
        <li key={key}>
          <button
            onClick={() => router.push("/" + path.toLowerCase())}
            className={`hover:text-[#a82fd0] hover:bg-gray-700 active:underline underline-offset-8 px-3 py-2 rounded transition-color duration-300 ${
              path.toLowerCase() == gpath.slice(0, gpath.indexOf("/"))
                ? "bg-[#2fd0a8] text-[#a82fd0]"
                : ""
            }`}
          >
            {path}
          </button>
        </li>
      ))}
    </ul>
  );
}
