import React from "react";
import { Silkscreen_400 } from "@/fonts";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="text-gray-300 mx-auto my-auto">
      <h1 className={`${Silkscreen_400.className} text-6xl`}>Hello, World!</h1>
      <h2 className={`w-80 mx-4 my-6`}>
        &emsp;My name is Abderrahim Mehellel, or Abdou for short, I'm a CS
        student and a coding hobbyist, I enjoy solving problems and thrive in a
        challenging environment, my passion is learning and I strive to surpass
        myself everyday.
      </h2>
    </div>
  );
}
