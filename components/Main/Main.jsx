/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.png";
import { ApplyWithDevfolioBtn } from "../ApplyWithDevfolioBtn/ApplyWithDevfolioBtn";

export const Main = () => {
  return (
    <>
      <main className="text-white mt-20 md:mt-24">
        <div className="max-w-[20rem] md:max-w-[30rem] mx-auto">
          <img src="./images/logo.png" alt="" />
        </div>
        <h1 className="text-center text-lg md:text-2xl font-semibold">
          5th November 2022, KIIT University
        </h1>
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="flex items-center w-50 gap-1">
            <img src="./images/gdsc-logo.svg" alt="" />
            <p className="font-semibold text-lg md:text-xl">GDSC KIIT</p>
          </div>
          <div className="font-medium">|</div>
          <img
            className="w-20"
            src="./images/devfolio-white.png"
            alt="devfolio-logo"
          />
        </div>
        <div className="flex justify-center my-4">
          <ApplyWithDevfolioBtn />
        </div>
        <img
          className="-mt-10 md:-mt-36 lg:-mt-60"
          src="./images/main-img.png"
          alt=""
        />
      </main>
    </>
  );
};
