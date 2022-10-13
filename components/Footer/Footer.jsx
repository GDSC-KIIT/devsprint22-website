/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-5/6 mt-10 pt-20">
        <div className="flex justify-center">
          <img className="h-10" src={`/images/logo.png`} alt="logo" />
        </div>
        <ul className="text-white flex gap-10 flex-wrap justify-center pt-10 pb-20">
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#schedule">Timeline</a>
          </li>
          <li>
            <a href="#tracks">Tracks</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
