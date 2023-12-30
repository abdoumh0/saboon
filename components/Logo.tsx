"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  burgerOpen: boolean;
};

export default function Logo({ burgerOpen }: Props) {
  const logo_text = "Saboon";
  const [cursor, setCursor] = useState<boolean>(true);
  const [logoText, setLogoText] = useState<string>(logo_text.slice(0, 1));

  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setCursor(!cursor);
    }, 530);
    return () => clearTimeout(t);
  }, [cursor, logoText]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (burgerOpen) {
        if (logoText.length > 0) {
          setLogoText((prev) => prev.slice(0, prev.length - 1));
        }
      } else {
        if (logoText != logo_text) {
          setLogoText(logo_text.slice(0, logoText.length + 1));
        }
      }
    }, 42);

    return () => clearTimeout(t);
  }, [logoText, burgerOpen]);

  return (
    <Link
      ref={linkRef}
      href="/"
      className={`flex logo items-center text-2xl md:text-4xl select-none hover:cursor-pointer rounded min-h-[40px] min-w-[27px] ${
        burgerOpen ? "logo-sm" : ""
      }`}
    >
      <p>{logoText}</p>
      {cursor && <p>_</p>}
    </Link>
  );
}
