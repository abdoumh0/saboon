import Loading from "@/components/Loading";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="flex relative justify-start items-center w-44 h-[16px] border-2 border-purple-500">
        <div className=" h-3 w-[40%] bg-red-500"></div>
      </div>
      {/*<Loading />*/}
    </>
  );
}
