"use client";
import React, { useState, Suspense, lazy } from "react";

const Mission = lazy(() => import("./sub_components/Mission"));
const Vision = lazy(() => import("./sub_components/Vision"));
const Careers = lazy(() => import("./sub_components/Careers"));
const Solutions = lazy(() => import("./sub_components/Solutions"));

export default function About_Us() {
  const [itemName, setItemName] = useState("mission");

  function tablHandler(tabName) {
    setItemName(tabName);
  }

  return (
    <section className="w-full ">
      <div className="max-w-screen-xl mx-auto px-2 py-16">
        <div className="text-center">
          <p className="uppercase text-maincolor text-lg tracking-wider">
            about us
          </p>
          <h1 className="text-3xl  font-semibold sm:text-4xl my-5">
            The Power Of <span className="text-maincolor">Software</span> The{" "}
            <br />
            Simplicity Of Solutions
          </h1>
        </div>
        <div className="bg-gray-100  px-3 pb-4 rounded shadow-xl">
          <div className="tabs w-full grid grid-cols-2 sm:grid-cols-4 py-3 mb-5   border-b-2">
            <button
              className={`px-4 py-2 hover:text-maincolor transition-all duration-200 ${itemName == 'mission' && "text-maincolor"}`}
              onClick={() => tablHandler("mission")}
            >
              Mission
            </button>
            <button
              className={`px-4 py-2 hover:text-maincolor transition-all duration-200 ${itemName == "vision" && "text-maincolor"}`}
              onClick={() => tablHandler("vision")}
            >
              Vision
            </button>
            <button
              className="px-4 py-2 hover:text-maincolor transition-all duration-200"
              onClick={() => tablHandler("careers")}
            >
              Careers
            </button>
            <button
              className="px-4 py-2 hover:text-maincolor transition-all duration-200"
              onClick={() => tablHandler("solutions")}
            >
              Solutions
            </button>
          </div>
          <div className="items mt-10 max-w-screen-lg mx-auto">
            {itemName === "mission" && (
              <Suspense fallback={<div className="animate-pulse bg-gray-300 h-40 w-full"></div>}>
                <Mission />
              </Suspense>
            )}
            {itemName === "vision" && (
              <Suspense fallback={<div className="animate-pulse bg-gray-300 h-40 w-full"></div>}>
                <Vision />
              </Suspense>
            )}
            {itemName === "careers" && (
              <Suspense fallback={<div className="animate-pulse bg-gray-300 h-40 w-full"></div>}>
                <Careers />
              </Suspense>
            )}
            {itemName === "solutions" && (
              <Suspense fallback={<div className="animate-pulse bg-gray-300 h-40 w-full"></div>}>
                <Solutions />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
