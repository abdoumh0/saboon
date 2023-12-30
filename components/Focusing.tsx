import { Silkscreen_Regular } from "@/fonts";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Focusing({}: Props) {
  return (
    <>
      <div
        className={`${Silkscreen_Regular.className} flex italic justify-center items-center`}
      >
        Currently pursuing:&ensp;
        <Link href="https://go.dev/" target="_blank" rel="noopener noreferrer">
          <Image
            color="blue"
            src="/go.svg"
            width={32}
            height={32}
            alt="go-logo"
          />
        </Link>
      </div>

      <div
        className={`${Silkscreen_Regular.className} flex italic justify-center items-center text-gray-300`}
      >
        Future Goals:
        <Link
          href="https://www.rust-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            color="blue"
            src="/rust.svg"
            width={36}
            height={36}
            alt="rust logo"
          />
        </Link>
        <Link
          href="https://www.opengl.org/https://www.rust-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            color="blue"
            src="/opengl.svg"
            width={36}
            height={36}
            alt="opengl logo"
          />
        </Link>
      </div>
    </>
  );
}
