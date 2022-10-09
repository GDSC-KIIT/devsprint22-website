/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { NavToggle } from "./NavToggle";
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
          <a href="#" className="hover:text-white transition-all delay-75">
            Schedule
          </a>
          <a href="#" className="hover:text-white transition-all delay-75">
            Sponsors
          </a>
          <a href="#" className="hover:text-white transition-all delay-75">
            FAQs
          </a>
        </div>
        <NavToggle setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col text-2xl font-medium text-navLink gap-4 pt-8">
            <a
              href="#"
              className="hover:text-white transition-all border-b-2 delay-75"
            >
              Schedule
            </a>
            <a
              href="#"
              className="hover:text-white transition-all border-b-2 delay-75"
            >
              Sponsors
            </a>
            <a
              href="#"
              className="hover:text-white transition-all border-b-2 delay-75"
            >
              FAQs
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
