import React from 'react'

export const Rules = () => {
  return (
    <div className='text-white flex flex-wrap justify-center'>
      <div className='flex justify-center w-2/3 py-40'>
        <div className=' text-5xl text-center flex-wrap'>Rules</div>
        <div className=''>
          <ul className='pl-10 list-decimal leading-7 text-neutral-300	'>
            <li>Each team can have a minimum of 3 and maximum of 5 members.<br /></li>
            <li>Each team should have one team Captain, who will be responsible for forwarding all necessary information to his team.<br /></li>
            <li>Each team has to select 1 domain of their choice out of the 4 given domains while registering. No team can change their domain once registered. <br /></li>
            <li>All the team leads will be added to a WhatsApp group for better communication.<br /></li>
            <li>Registration phase ends on 30th October at 11:59PM IST hours. <br /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
