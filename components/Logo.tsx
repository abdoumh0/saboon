"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {};
export default function Logo({}: Props) {
  const [cursor, setCursor] = useState<boolean>(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setCursor(!cursor);
    }, 530);
    return () => clearTimeout(t);
  }, [cursor]);

  return (
    <Link
      href="/"
      className="flex text-4xl select-none hover:cursor-pointer rounded"
    >
      <p>Saboon</p>
      {cursor && <p>_</p>}
    </Link>
  );
}
