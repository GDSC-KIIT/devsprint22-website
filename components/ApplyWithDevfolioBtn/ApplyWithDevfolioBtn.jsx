/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ApplyWithDevfolioBtn = () => {
  return (
    <a
      href="https://devfolio.co"
      className="flex items-center gap-3 bg-white w-fit py-2 px-4 rounded-sm"
    >
      <div className="w-8">
        <img src="./images/devfolio-blue-logo.svg" alt="" />
      </div>
      <p className="text-md text-black font-semibold">Apply with Devfolio</p>
    </a>
  );
};
