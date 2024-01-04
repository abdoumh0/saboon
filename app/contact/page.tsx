import Socials from "@/components/Socials";
import { VT323 } from "@/fonts";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className={`${VT323.className} grid text-3xl gap-y-24 text-gray-500`}>
      <div className="w-fit mx-auto focus-within:text-[#a82fd0] hover:text-[#a82fd0] transition-all duration-75">
        Email me
        <Link
          className="flex justify-center group"
          href="mailto:abdoumeh421@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="fill-gray-500 group-focus:fill-red-700 group-focus:animate-bounce group-hover:fill-red-700 w-[48px] group-hover:animate-bounce"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-email"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z"></path>
            </g>
          </svg>
        </Link>
      </div>
      <div className="mx-auto w-fit focus-within:text-[#2fd0a8] hover:text-[#2fd0a8] transition-all duration-75">
        <div className="mx-auto w-fit">or find me here</div>
        <div className="w-fit mx-auto">
          <Socials />
        </div>
      </div>
    </div>
  );
}
