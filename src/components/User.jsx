import React from 'react'

export const User = ({UserImage}) => {
  return (
    <>
        <div className='md:w-10 md:h-10 rounded-full shadow-sm overflow-hidden'>
            <img src={UserImage} alt="userimage"  className='h-full w-full object-cover'/>
        </div>
    </>
  )
}
