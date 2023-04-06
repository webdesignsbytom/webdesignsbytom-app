import React from 'react';
// Icons
import PlusIconReg from '../../assets/svg/plusIconReg.svg';
import HeartIcon from '../../assets/svg/heart.svg';

function AddFavBar({
  page,
  addRemovePageToFavorites,
  addRemovePageToDesign,
}) {
  return (
    <section className='flex justify-end'>
      <div>
        <img
          onClick={() => addRemovePageToDesign(page)}
          className='w-5 cursor-pointer m-1 transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
          src={PlusIconReg}
          alt='favorite icon'
        />
      </div>
      <div>
        <img
          onClick={() => addRemovePageToFavorites(page)}
          className='w-5 cursor-pointer m-1 transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
          src={HeartIcon}
          alt='favorite icon'
        />
      </div>
    </section>
  );
}

export default AddFavBar;
