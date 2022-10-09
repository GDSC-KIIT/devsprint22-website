/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
export const SponsorRow = ({ imgArr }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
      {imgArr.map(({ name, url }, index) => (
        <a href={url} key={index} className="max-w-[15rem]">
          <img
            loading="lazy"
            src={`/sponsors/${name}.png`}
            alt="sponsor-image"
          />
        </a>
      ))}
    </div>
  );
};