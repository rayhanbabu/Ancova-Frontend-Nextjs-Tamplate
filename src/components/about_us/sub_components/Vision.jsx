import React from "react";
import { FaKorvue, FaSign } from "react-icons/fa";

export default function Vision() {
  return (
    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
      <div className="img">
        <img
          src="https://next.aglietech.wowtheme7.com/assets/img/about/16.png"
          alt="image"
        />
      </div>
      <div className="text">
        <h2 className="text-3xl font-semibold">The software development</h2>
        <p className="py-3">
          A software company is a business that designs, develops, and sells
          software products to individuals and organizations. These companies
          use a variety of programming languages and technologies to create
          custom software solutions for a wide range of industries
        </p>
        <div className="items flex gap-4 mt-3 items-center">
          <div className="text-lg">
            {" "}
            <div className="flex items-center gap-3">
              <FaKorvue className="text-maincolor" />
              <p>Mistakes to avoid the</p>
            </div>
            <div className="flex items-center gap-3">
              <FaKorvue className="text-maincolor" />
              <p>Mistakes to avoid the</p>
            </div>
          </div>
          <div className="text-lg">
            <div className="flex items-center gap-3">
              <FaKorvue className="text-maincolor" />
              <p>Mistakes to avoid the</p>
            </div>
            <div className="flex items-center gap-3">
              <FaKorvue className="text-maincolor" />
              <p>Mistakes to avoid the</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
