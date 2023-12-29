import React from "react";
import { Silkscreen_Regular, Cairo_400, Roboto_Mono_400 } from "@/fonts";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="text-gray-300 mx-auto my-auto fadein">
      <h1 className={`${Silkscreen_Regular.className} text-6xl`}>
        Hello, World!
      </h1>
      <h2 className={`${Roboto_Mono_400.className}  mx-4 my-6 text-xl`}>
        &emsp;The name is Abderrahim Mehellel, or{" "}
        <span className={`${Silkscreen_Regular.className} text-lg`}>Abdou</span>{" "}
        for short, As a Computer Science student, I find joy in unraveling the
        intricacies of code and technology. I enjoy solving problems and thrive
        in challenging environments. The journey of perpetual learning
        captivates me, and I am dedicated to pushing my own boundaries everyday.
      </h2>
    </div>
  );
}
