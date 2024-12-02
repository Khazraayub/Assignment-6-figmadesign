"use client";
import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#043873] md:w-full text-white py-8 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:justify-around items-center text-sm space-y-4 sm:space-y-0 mb-8">
        <div className="w-full sm:w-40 text-center sm:text-left">
          <div className="text-2xl font-bold transition-transform transform hover:scale-125">
            <Image
              src="/images/Logo1.png"
              alt="Logo"
              width={200}
              height={200}
              className="mb-4 mx-auto sm:ml-2"
            />
          </div>
          <p className="px-4 sm:px-0">
            Whitespace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h5 className="font-bold mb-2 transition-transform transform hover:scale-125 text-lg">
            Product
          </h5>
          <p className="hover:text-[#FFE492] hover:underline">Overview</p>
          <p className="hover:text-[#FFE492] hover:underline">Pricing</p>
          <p className="hover:text-[#FFE492] hover:underline">
            Customer Stories
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h5 className="font-bold mb-2 transition-transform transform hover:scale-125 text-lg">
            Resources
          </h5>
          <p className="hover:text-[#FFE492] hover:underline">Blog</p>
          <p className="hover:text-[#FFE492] hover:underline">
            Guide & Tutorials
          </p>
          <p className="hover:text-[#FFE492] hover:underline">Help Center</p>
        </div>

        <div className="text-center sm:text-left">
          <h5 className="font-bold mb-2 transition-transform transform hover:scale-125 text-lg">
            Company
          </h5>
          <p className="hover:text-[#FFE492] hover:underline">About us</p>
          <p className="hover:text-[#FFE492] hover:underline">Careers</p>
          <p className="hover:text-[#FFE492] hover:underline">Media Kit</p>
        </div>
      </div>

      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          Design by Khazra Shaikh
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Whitespace LLC
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-white">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>

          <a className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
