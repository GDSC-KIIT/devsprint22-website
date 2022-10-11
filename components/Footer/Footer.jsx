/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Logo from "../../public/images/logo.png";

export const Footer = () => {
  return (
    <div className='flex justify-center '>
      <div className="w-5/6 mt-10 pt-20">
        <div className='flex justify-center'>
          <img
            className='h-10'
            src={`/images/logo.png`}
            alt="logo"
          />
        </div>
        <ul className='text-white flex justify-center pt-10 pb-20'>
          <li className='mx-10'>
            <a href='#aboutus'>
              About Us
            </a>
          </li>
          <li className='mx-10'>
            <a href='#sponsors'>
              Sponsors
            </a>
          </li>
          <li className='mx-10'>
            <a href='#team'>
              Team
            </a>
          </li>
          <li className='mx-10'>
            <a href='#schedule'>
              Timeline
            </a>
          </li>
          <li className='mx-10'>
            <a href='#tracks'>
              Tracks
            </a>
          </li>
        </ul>
      </div>


    </div>
  )
}
