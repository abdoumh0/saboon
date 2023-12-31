import Socials from "@/components/Socials";
import { VT323 } from "@/fonts";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div
      className={`${VT323.className} grid text-3xl gap-y-24 text-gray-500 transition-all duration-300`}
    >
      <div className="w-fit mx-auto">
        Email me
        <Link
          className="flex justify-center"
          href="mailto:abdoumeh421@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="fill-gray-500 hover:fill-red-700 w-[48px] hover:animate-bounce transition-all duration-300"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-email"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z"></path>
            </g>
          </svg>
        </Link>
      </div>
      <div className="mx-auto w-fit">
        <div className="mx-auto w-fit">or find me here</div>
        <div className="w-fit mx-auto">
          <Socials />
        </div>
      </div>
    </div>
  );
}
