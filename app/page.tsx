import React from "react";
import { redirect } from "next/navigation";
type Props = {};

export default function page({}: Props) {
  redirect("/about");

  return <h1>Redirecting...</h1>;
}
