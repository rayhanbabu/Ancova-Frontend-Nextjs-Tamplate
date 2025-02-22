"use client";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const defaultHandler = () => {
  console.log("Button clicked");
};

export default function Button({ handler = defaultHandler, text = "Discover More" }) {
  return (
    <div
      className="w-fit main-button relative flex items-center gap-3 font-bold rounded-full border-2 border-maincolor px-8 py-4 overflow-hidden hover:text-white"
      onClick={handler}
    >
      <Link href={"/"} className="z-10">
        {text}
      </Link>
      <FaPlus className="z-10" />
    </div>
  );
}
