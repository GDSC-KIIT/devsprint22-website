/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ApplyWithDevfolioBtn = () => {
  return (
    <a
      href="https://devfolio.co"
      className="flex items-center gap-3 bg-white hover:bg-white/95 transition-all duration-150 w-fit py-2 px-4 rounded z-10"
    >
      <div className="w-8">
        <img src="./images/devfolio-blue-logo.svg" alt="" />
      </div>
      <p className="text-md text-black font-semibold">Apply with Devfolio</p>
    </a>
  );
};
