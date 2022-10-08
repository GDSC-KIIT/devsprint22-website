/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { NavToggle } from "./NavToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-4 md:px-8 pt-10 justify-center flex flex-col items-between">
      <div className="flex items-center justify-between">
        <div className="max-w-[10rem] md:max-w-[15rem] ">
          <img className="w-full" src="/logo.png" alt="Workflow" />
        </div>
        <div className="hidden md:flex md:flex-row text-navLink font-semibold gap-8 text-xl ">
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
        <div className="md:hidden transition-all delay-1000">
          <div className="flex flex-col text-2xl font-semibold text-navLink gap-4 pt-8">
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
        </div>
      )}
    </nav>
  );
};
