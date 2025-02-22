"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function QNA() {
  const [activeKey, setActiveKey] = useState('0');

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <p className='uppercase text-maincolor text-lg tracking-wider'>YOUR ANSWER</p>
          <h1 className="text-3xl font-semibold sm:text-4xl my-5">
            Have Any <span className="text-maincolor">Questions</span> <br /> Please?
          </h1>
          <div>
            {['0', '1', '2'].map((key) => (
              <div className="border-b" key={key}>
                <button
                  className="flex items-center w-full py-4 transition-colors duration-300"
                  onClick={() => toggleAccordion(key)}
                >
                  <div className="text-maincolor rounded-full w-8 h-8 flex justify-center items-center mr-2 transition-transform duration-300">
                    {activeKey === key ? <FaMinus /> : <FaPlus />}
                  </div>
                  <span className={activeKey === key ? 'text-maincolor' : 'text-black'}>
                    Question {parseInt(key) + 1}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeKey === key ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-4">
                    Answer {parseInt(key) + 1} with some more detailed information.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://next.aglietech.wowtheme7.com/assets/img/about/15.png"
            alt="QNA"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
