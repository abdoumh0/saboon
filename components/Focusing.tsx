import { Silkscreen_Regular } from "@/fonts";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Focusing({}: Props) {
  return (
    <div className="text-gray-600">
      <div
        className={`${Silkscreen_Regular.className} flex gap-x-4 italic justify-center items-center`}
      >
        Currently learning:
        <Link
          href="https://www.rust-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            color="blue"
            src="/rust.svg"
            width={48}
            height={48}
            alt="rust logo"
          />
        </Link>
        <Link href="https://go.dev/" target="_blank" rel="noopener noreferrer">
          <Image
            color="blue"
            src="/go.svg"
            width={38}
            height={38}
            alt="go-logo"
          />
        </Link>
      </div>

      <div
        className={`${Silkscreen_Regular.className} flex gap-x-4 italic justify-center items-center`}
      >
        {/* Other Interests:
        <Link
          href="https://www.opengl.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            color="blue"
            src="/opengl.svg"
            width={46}
            height={46}
            alt="opengl logo"
          />
        </Link> */}
      </div>
    </div>
  );
}
