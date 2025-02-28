"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Testimonial.css"; // Import the custom CSS file

export default function Testimonial() {
  const testimonials = [
    {
      photo:
        "https://next.aglietech.wowtheme7.com/assets/img/testimonial/10.png",
      quote: "This is a great service!",
      name: "John Doe",
    },
    {
      photo:
        "https://next.aglietech.wowtheme7.com/assets/img/testimonial/10.png",
      quote: "I am very satisfied with the results.",
      name: "Jane Smith",
    },
    {
      photo:
        "https://next.aglietech.wowtheme7.com/assets/img/testimonial/10.png",
      quote: "Highly recommend to everyone.",
      name: "Alice Johnson",
    },
    {
      photo:
        "https://next.aglietech.wowtheme7.com/assets/img/testimonial/10.png",
      quote: "Exceptional quality and service.",
      name: "Robert Brown",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="slick-dot-"></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full testimonial mx-auto p-4">
      <div className="max-w-screen-xl py-32 mx-auto px-2">
        <div className="text-center">
          <p className="uppercase text-maincolor text-lg tracking-wider">
            YOUR ANSWER
          </p>
          <h1 className="text-5xl font-semibold sm:text-4xl my-5">
            What Clients <span className="text-maincolor">Think</span> About Us
          </h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col sm:flex-row items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="rounded-lg mb-4 sm:mb-0 sm:mr-4 w-24 h-24 sm:w-auto sm:h-auto"
                />
                <div className="text-center sm:text-left">
                  <p className="text-xl italic">"{testimonial.quote}"</p>
                  <div className="flex justify-center sm:justify-start mt-2">
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                    <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <p className="mt-2 font-semibold text-xl">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
