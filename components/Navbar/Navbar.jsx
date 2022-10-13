/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { NavToggle } from "./NavToggle";
import { Transition } from "@headlessui/react";
import Logo from "../../public/images/logo.png";
import RightArrow from "../../public/images/right-arrow.png";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="pt-10 justify-center md:px-6 flex flex-col items-between relative z-50">
      <div className="flex items-center px-4 justify-between z-[100]">
        <div className="max-w-[10rem] md:max-w-[15rem]">
          <Image
            width={Logo.width}
            height={Logo.height}
            className="w-full"
            src={Logo}
            alt="Workflow"
          />
        </div>
        <div className="hidden md:flex md:flex-row text-navLink font-medium gap-8 text-xl ">
          <a href="#timeline" className="hover:text-white">
            Timeline
          </a>
          <a href="#sponsors" className="hover:text-white">
            Sponsors
          </a>
          <a href="#faqs" className="hover:text-white">
            FAQs
          </a>
        </div>
        <NavToggle setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-100 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-100 scale-95"
      >
        <div className="md:hidden absolute w-full -top-20 pt-20 pb-4 bg-primaryLight shadow-xl shadow-[#180E50]/20 z-50 ">
          <div className="flex flex-col text-2xl px-4 font-medium text-navLink gap-4 pt-8">
            <a
              href="#timeline"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Timeline</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-2 transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
            <a
              href="#sponsors"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Sponsors</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-2 transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
            <a
              href="#faqs"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>FAQs</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-2 transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};
