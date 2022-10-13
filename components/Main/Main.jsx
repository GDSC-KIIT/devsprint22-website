/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ApplyWithDevfolioBtn } from "../ApplyWithDevfolioBtn/ApplyWithDevfolioBtn";
import Logo from "../../public/images/logo.png";
import DevfolioWhite from "../../public/images/devfolio-white.svg";
import MainImage from "../../public/images/main-img.png";

export const Main = () => {
  return (
    <>
      <main className="text-white mt-32 md:mt-28" id="main-page">
        <div className="max-w-[20rem] md:max-w-[30rem] mx-auto">
          <Image
            height={Logo.height}
            width={Logo.width}
            src={Logo}
            loading="eager"
            priority
            alt="logo"
          />
        </div>
        <h1 className="text-center text-lg mb-4 md:text-2xl font-semibold">
          5th November 2022, KIIT University
        </h1>
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="flex items-center w-50 gap-1">
            <img src="./images/gdsc-logo.svg" alt="" />
            <p className="font-semibold text-lg md:text-xl">GDSC KIIT</p>
          </div>
          <div className="font-medium">|</div>
          <Image
            width={110}
            height={30}
            src={DevfolioWhite}
            alt="devfolio-logo"
          />
        </div>
        <div className="flex justify-center my-6">
          <ApplyWithDevfolioBtn />
        </div>
        <div className="-mt-6 md:-mt-32 lg:-mt-60">
          <Image
            height={MainImage.height}
            width={MainImage.width}
            className="md lg:-mt-80"
            src={MainImage}
            alt="main-img"
            loading="eager"
            priority
          />
        </div>
      </main>
    </>
  );
};
