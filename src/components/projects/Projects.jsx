'use client';
import React, { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('nav-tabs5');

  const projects = [
    { id: 1, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 2, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 3, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 4, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 5, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 6, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 7, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
    { id: 8, img: '	https://next.aglietech.wowtheme7.com/assets/img/gallery/1.png' },
  ];

  const tabs = [
    { id: 'nav-tabs1', title: 'View All' },
    { id: 'nav-tabs2', title: 'Software' },
    { id: 'nav-tabs3', title: 'New Project' },
    { id: 'nav-tabs4', title: 'Digitals' },
    { id: 'nav-tabs5', title: 'Hardware' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 text-center mb-12">
          <h6 className="text-sm font-semibold uppercase text-primary mb-2">
            Gallery Here
          </h6>
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-primary">Project</span> Are Here
          </h2>
        </div>
      </div>

      <nav className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden rounded-lg">
            <img
              src={project.img}
              alt="Project"
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center">
                <button className="text-white bg-primary rounded-full p-3 mb-2 hover:bg-primary-dark">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-6 h-6"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </button>
                <a
                  href="#"
                  className="text-white font-medium hover:text-primary transition-colors"
                >
                  MORE PROJECT
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}