import React from 'react';
// Icons
import changeIcon from '../../img/changeIcon.svg';
import QuestionMark from '../../img/questionMark.svg';

function ColourItem({ colour, openPicker }) {
    
  return (
    <li className='grid mx-6'>
      <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
        <h4 className='text-sm mt-1'>{colour.title}</h4>
        <div className='relative group flex align-middle h-full pl-1 pt-1'>
          <img
            src={QuestionMark}
            className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
            alt='information'
            data-te-animation-init
          />
          <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
            {colour.info}
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-1'>
        <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
          <h5 className='align-middle'>
            {colour.colour}
          </h5>
          <img
            className='w-4 cursor-pointer focus:animate-spin active:animate-spin'
            src={changeIcon}
            alt='switch colour format'
          />
        </div>
        <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
          <div
            id={colour.id}
            className={colour.css}
            onClick={openPicker}
          ></div>
        </div>
      </div>
    </li>
  );
}

export default ColourItem;
