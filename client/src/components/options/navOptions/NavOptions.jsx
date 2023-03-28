import React, { useState } from 'react';
import NavItemsList from './NavItemsList';

function NavOptions({ navigationStyleOptions, setNavigationStyleOptions }) {

  console.log('nav', navigationStyleOptions);
  const selectNavPosition = (event) => {
    const { id } = event.target;

    setNavigationStyleOptions({
      ...navigationStyleOptions,
      position: true,
      positionType: id,
    });
  };

  const selectNavBarOption = (item) => {
    const currentArray = navigationStyleOptions.menuOptions;
    currentArray.push(item);

    setNavigationStyleOptions({
      ...navigationStyleOptions,
      menuOptions: currentArray,
    });
  };

  const resetNavBar = () => {
    setNavigationStyleOptions({
      ...navigationStyleOptions,
      menuOptions: [],
    });
  };

  return (
    <section className='relative'>
      {/* If top nav */}
      {navigationStyleOptions.position &&
        navigationStyleOptions.positionType === 'topNav' && (
          <div>
            <section className='h-16 bg-slate-500 w-full'>
              <ul className='flex h-full justify-between items-center w-full'>
                {navigationStyleOptions.menuOptions.map((item, index) => {
                  return (
                    <li className='p-2' key={index}>
                      <h5 className='text-white font-semibold text-xl'>
                        {item.icon}
                      </h5>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section>
              <div className='flex justify-end w-full p-1'>
                <button
                  onClick={resetNavBar}
                  className='bg-blue-500 mb-20 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl'
                >
                  Reset
                </button>
              </div>
              <NavItemsList selectNavBarOption={selectNavBarOption} />
            </section>
          </div>
        )}

      {/* If side nav */}
      {navigationStyleOptions.position &&
        navigationStyleOptions.positionType === 'sideNav' && (
          <div className='grid h-full grid-cols-reg'>
            <section className='h-full bg-slate-500 w-full'>
              <ul className='grid gap-2 h-full justify-between items-center w-[200px]'>
                {navigationStyleOptions.menuOptions.map((item, index) => {
                  return (
                    <li className='p-2' key={index}>
                      <h5 className='text-white font-semibold text-xl'>
                        {item.icon}
                      </h5>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className='grid grid-rows-reg w-full'>
              <div className='flex justify-end w-full p-1'>
                <button
                  onClick={resetNavBar}
                  className='bg-blue-500 mb-20 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl'
                >
                  Reset
                </button>
              </div>
              <NavItemsList selectNavBarOption={selectNavBarOption} />
            </section>
          </div>
        )}

      {/* Select Nav */}
      {!navigationStyleOptions.position && (
        <section className='grid w-full h-full justify-center items-center bg-white'>
          <article className='border-black border-2 border-solid rounded-xl p-6'>
            <div className='text-center p-2 font-semibold'>
              <h3 className='text-xl capitalize'>
                Select A navigaion menu type
              </h3>
            </div>
            <section className='grid gap-2'>
              <section className='border-yellow-500 bg-black border-2 border-solid'>
                <button
                  id='topNav'
                  onClick={selectNavPosition}
                  className='mx-auto w-[300px] bg-blue-500 mb-20 hover:bg-blue-700 text-white font-bold py-2 px-4'
                >
                  Top Bar Navigation
                </button>
              </section>
              <section className='border-yellow-500 bg-black border-2  border-solid'>
                <button
                  id='sideNav'
                  onClick={selectNavPosition}
                  className='mx-auto bg-blue-500 hover:bg-blue-700 min-h-[200px] text-white font-bold py-2 px-4'
                >
                  Side <br /> Bar <br /> Navigation <br /> <br />
                  <span className='font-semibold text-xs'>Left or Right</span>
                </button>
              </section>
            </section>
          </article>
        </section>
      )}
    </section>
  );
}

export default NavOptions;
