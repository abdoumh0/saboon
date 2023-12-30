import React from "react";
import { Silkscreen_Regular, VT323 } from "@/fonts";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex h-[100%] justify-center items-center text-gray-300 mx-auto my-auto fadein">
      <div className="text-center">
        <h1
          className={`${Silkscreen_Regular.className} stroke-black stroke-2 text-8xl text-shadows`}
        >
          Hello, World!
        </h1>
        <h2 className={`${VT323.className}  mx-4 my-6 text-2xl`}>
          &emsp;My name is Abderrahim, or{" "}
          <span
            className={`${Silkscreen_Regular.className} text-lg color-change`}
          >
            Raheem
          </span>{" "}
          for short, I'm a computer science student who finds joy in unraveling
          the intricacies of code and technology. I enjoy solving problems and
          thrive in challenging environments. The journey of perpetual learning
          captivates me, and I am dedicated to pushing my own boundaries
          everyday.
        </h2>
      </div>
    </div>
  );
}
