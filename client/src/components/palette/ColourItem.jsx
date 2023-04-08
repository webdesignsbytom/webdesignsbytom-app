import React from 'react';
// Icons
import changeIcon from '../../assets/svg/changeIcon.svg';
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { SketchPicker } from 'react-color';

function ColourItem({
  colour,
  openSmallPicker,
  displaySmallPicker,
  closeSmallColourPicker,
  currentColour,
  handleChangeComplete,
  setNewColour,
  openBigPicker,
  setRandomColourItem,
}) {
  return (
    <li className='grid mx-6 dark:text-gray-100'>
      <section className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
        <h4 className='text-sm mt-1'>{colour.title}</h4>
        <div className='relative group flex align-middle h-full pl-1 pt-1'>
          <HiOutlineQuestionMarkCircle
            size={20}
            className='no__highlights pr-[1px] dark:text-white cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
            alt='information'
            data-te-animation-init
          />
          <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale dark:text-black p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
            {colour.info}
          </div>
        </div>
      </section>
      <section className='flex justify-center gap-1'>
        <article className='flex justify-between bg-white dark:bg-black border-2 border-black dark:border-gray-100 border-solid rounded w-full px-2'>
          <h5 className='align-middle'>{colour.colour}</h5>
          <img
            id={colour.id}
            onClick={() => setRandomColourItem(colour)}
            className='w-4 no__highlights cursor-pointer focus:animate-spin active:animate-spin'
            src={changeIcon}
            alt='switch colour format'
          />
        </article>
        {/* Phone */}
        <div className='grid lg:hidden border-2 cursor-pointer border-black dark:border-gray-100 border-solid rounded w-[30px] grid-rows-1 overflow-hidden'>
          <div
            id={colour.id}
            style={{ backgroundColor: `${colour.css}` }}
            onClick={() => openSmallPicker(colour)}
            className='no__highlights'
          ></div>
        </div>
        {/* Monitor */}
        <div className='hidden lg:grid border-2 cursor-pointer border-black dark:border-gray-100 border-solid rounded w-[30px] grid-rows-1 overflow-hidden select-none no__highlights'>
          <div
            id={colour.id}
            style={{ backgroundColor: `${colour.css}` }}
            onClick={() => openBigPicker(colour)}
            className='select-none no__highlights'
          ></div>
        </div>
      </section>

      {displaySmallPicker[colour.id] && (
        <div className='z-10 bg-white border-2 border-black border-solid dark:border-white dark:bg-black rounded p-1 cursor-pointer'>
          <div className='flex justify-end my-1 dark:text-gray-100'>
            <RxCross2 onClick={closeSmallColourPicker} />
          </div>
          <SketchPicker
            color={currentColour.hex}
            onChange={handleChangeComplete}
          />
          <div className='flex justify-center my-2'>
            <button
              onClick={setNewColour}
              className={`py-1 px-3 outline outline-black dark:outline-gray-100 outline-1 rounded-lg hover:bg-red-500`}
            >
              SET COLOUR
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default ColourItem;
