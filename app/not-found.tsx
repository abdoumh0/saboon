import { Silkscreen_Regular } from "@/fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`${Silkscreen_Regular.className} flex justify-center h-[100%] items-center`}
    >
      <div className=" bg-gray-950 grid">
        <div className={`flex text-8xl my-2`}>404</div>
        <Link
          href="/"
          className="w-fit mx-auto text-[#2fd0a8] text-lg hover:text-[#a82fd0] active:underline underline-offset-8 hover:bg-gray-700 p-2 rounded transition-colors duration-300"
        >
          Return
        </Link>
      </div>
    </div>
  );
}
