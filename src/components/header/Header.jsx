"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import Button from "../button/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="shadow-lg">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex items-center justify-between py-4">
          <div className="logo">
            <Link href={"/"}>
              <img src="/ancova.png" alt="logo" className="w-auto h-8" />
            </Link>
          </div>
          <nav
            className={`navigation-menu flex items-center justify-end gap-5 sm:flex-row sm:bg-transparent bg-gray-200 z-50 py-5 sm:py-0 absolute sm:opacity-100 sm:static sm:flex top-[15%] w-full  flex-col text-lg transition-all duration-300 ${
              isOpen ? "left-0 opacity-100" : "left-[-100%] opacity-0"
            } sm:flex`}
          >
            <ul className="me-10 flex items-center justify-center gap-5 text-lg sm:flex-row flex-col">
              <li>
                <Link href={"/"} onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={handleMenuClick}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={handleMenuClick}>
                  More
                </Link>
              </li>
            </ul>

           <Button handler={handleMenuClick} text="Discover More"/>
          </nav>
          <div
            className="nav-button text-2xl sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}
