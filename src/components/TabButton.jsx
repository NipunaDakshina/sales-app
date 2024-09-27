import React from 'react'

export const TabButton = (props) => {
  return (
    <>
      <button className="outline outline-2 outline-gray-200 bg-transparent rounded-full shadow-md text-white text-xl px-2 font-[helvetica]  md:w-40 ">
        {props.children}
      </button>
    </>
  )
}
