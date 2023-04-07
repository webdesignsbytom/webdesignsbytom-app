import React from 'react';
// Icons
import PlusIconReg from '../../assets/svg/plusIconReg.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

function AddFavBar({
  object,
  addRemoveFavorites,
  addRemoveDesign,
}) {
  return (
    <section className='flex items-center h-fit justify-end'>
      <div>
        <AiOutlinePlus size={20}
          onClick={() => addRemoveDesign(object)}
          className='cursor-pointer m-1 dark:text-gray-100 transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
          alt='favorite icon'
        />
      </div>
      <div>
        <BsHeartFill size={18}
          onClick={() => addRemoveFavorites(object)}
          className='text-red-600 cursor-pointer m-1 transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
          alt='favorite icon'
        />
      </div>
    </section>
  );
}

export default AddFavBar;
