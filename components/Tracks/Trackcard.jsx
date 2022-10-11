import React from 'react'

export const Trackcard = ({color, text, para}) => {  
  return (
    <div className="flex justify-center p-5">
  <div className="block p-6 rounded-lg shadow-lg bg-slate-700 max-w-lg">
  <div className={`text-sm text-black border-black block rounded-full ${color} mb-6 p-2 h-10 pl-4 pr-4 w-fit font-medium`}>{text}</div>
    <p className="text-white-700 text-base mb-3">
      {para}
    </p>
  </div>
</div>
  )
}