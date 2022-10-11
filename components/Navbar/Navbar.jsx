/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { NavToggle } from "./NavToggle";
import { Transition } from "@headlessui/react";
import Logo from "../../public/images/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-4 md:px-8 pt-10 justify-center flex flex-col items-between">
      <div className="flex items-center justify-between">
        <div className="max-w-[10rem] md:max-w-[15rem] ">
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
            Schedule
          </a>
          <a href="#sponsors" className="hover:text-white">
            Sponsors
          </a>
          <a href="#FAQs" className="hover:text-white">
            FAQs
          </a>
        </div>
        <NavToggle setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="flex flex-col text-2xl font-medium text-navLink gap-4 pt-8">
            <a
              href="#"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Schedule</div>
              <img
                className="-translate-x-2 group-hover:translate-x-2 transition-all duration-300"
                src="/images/right-arrow.png"
                alt=""
              />
            </a>
            <a
              href="#sponsors"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Sponsors</div>
              <img
                className="-translate-x-2 group-hover:translate-x-2 transition-all duration-300"
                src="/images/right-arrow.png"
                alt=""
              />
            </a>
            <a
              href="#"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>FAQs</div>
              <img
                className="-translate-x-2 group-hover:translate-x-2 transition-all duration-300"
                src="/images/right-arrow.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};
