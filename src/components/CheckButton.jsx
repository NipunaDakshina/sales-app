import React from 'react'
import thickImg from '../assets/xmm-tick.png';

export const CheckButton = (props) => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='md:h-6 md:w-6'><img src={thickImg} alt="thick icon" /></div>
        <div className='text-xl text-white font-[popins] pl-4 pr-6'>{props.item}</div>
    </div> )
}
