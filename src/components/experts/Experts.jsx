"use client";
import React from "react";
import Slider from "react-slick";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Experts() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="w-full experts">
      <div className="max-w-screen-xl mx-auto px-2 py-16">
        <div className="text-center">
          <p className="uppercase text-maincolor text-lg tracking-wider">
            meet our experts
          </p>
          <h1 className="text-3xl text-white font-semibold sm:text-4xl my-5">
            Your Partner In <span className="text-maincolor">Digital</span>{" "}
            Success
          </h1>
        </div>
        <Slider {...settings}>
          {[1, 2, 3].map((item, index) => (
            <div className="item" key={index}>
              <img
                src="https://next.aglietech.wowtheme7.com/assets/img/team/4.png"
                alt="item image"
                className="transition-all duration-200 hover:scale-105"
              />
              <div className="data rounded-lg text-center bg-[hsla(0,0%,100%,.8)] p-4 mx-4 -mt-16 z-20 relative">
                <h3 className="text-2xl mb-2 font-semibold text-maincolor">
                  Devon Lane
                </h3>
                <p className="mb-2">Marketing Department</p>
                <div className="flex gap-5 bg-white social-icons items-center justify-center mt-3 w-fit mx-auto px-6 py-4 rounded-md ">
                  <FaFacebook className="transition-all duration-200 hover:text-maincolor cursor-pointer" />
                  <FaTwitter className="transition-all duration-200 hover:text-maincolor cursor-pointer" />
                  <FaInstagram className="transition-all duration-200 hover:text-maincolor cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
