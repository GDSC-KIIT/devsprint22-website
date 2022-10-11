import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/timeline.png'

export const Timeline = () => {
  return (
    <div className='text-white' id="timeline">
      <div className='text-5xl'>
        <Image
          height={Logo.height}
          width={Logo.width}
          src={Logo}
          loading="eager"
          priority
          alt="logo"
        />
      </div>


    </div>
  )
}
