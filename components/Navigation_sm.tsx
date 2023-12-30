"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

export default function Navigation({}: Props) {
  const router = useRouter();
  const gpath = usePathname().slice(1) + "/";
  const routes = ["Work", "About", "Skills", "Contact"];

  return (
    <ul className="flex text-sm justify-between space-x-1 navigation fadein nv-sm">
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
