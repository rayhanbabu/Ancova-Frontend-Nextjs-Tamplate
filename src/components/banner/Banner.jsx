import React from "react";
import Button from "../button/Button";

export default function Banner() {
  return (
    <section className="banner bg-[#f8f9fc]">
      <div className="max-w-screen-xl mx-auto px-2 grid grid-cols-12 items-center gap-4">
        <div className="left col-span-12 mt-10 lg:mt-0 sm:col-span-7 z-20">
          <div className="bg-white shadow-2xl tracking-wider mb-4 border rounded-full w-fit px-4 py-2">DESIGNING FOR THE FUTURE</div>
          <h3 className="text-4xl md:text-7xl mb-6 font-bold">
            Innovation Solutions <br /> For A <span className="text-maincolor">Digital</span> World
          </h3>
          <Button />
        </div>
        <div className="right col-span-12 sm:col-span-5">
          <img src="https://next.aglietech.wowtheme7.com/assets/img/banner-4/1.png" alt="image" />
        </div>
      </div>
    </section>
  );
}
