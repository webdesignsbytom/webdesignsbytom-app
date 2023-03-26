import React from 'react';
// Icons
import AddFavBar from '../utils/AddFavBar';

function Buttons() {
  return (
    <section>
      <div>
        <h2>Buttons</h2>
      </div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full'>
        {/* Classic Button */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='w-[120px] mx-auto outline outline-1 outline-gray-400 py-2 px-4'>
                Click
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Classic</h3>
              <p className='text-sm text-center'>
                Standard button with no effect - lets move on..
              </p>
            </div>
          </article>
        </li>
        {/* Button 2 */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='w-[120px] mx-auto outline outline-1 outline-gray-400 rounded py-2 px-4'>
                Click
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Rounded</h3>
              <p className='text-sm text-center'>
                The simplest style - You can vary how much you round off edges on any web element.
              </p>
            </div>
          </article>
        </li>
        {/* 3 */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='w-[120px] mx-auto outline outline-1 rounded outline-gray-400 bg-white hover:outline-blue-500 hover:text-blue-500 hover:bg-gray-100 active:outline-blue-500 active:text-blue-500 py-2 px-4'>
                Click
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Interactive</h3>
              <p className='text-sm text-center'>
                Hover effects give life and animation to the button pressing experience.
              </p>
            </div>
          </article>
        </li>
        {/* 4 */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='w-[120px] mx-auto outline outline-1 rounded py-2 px-4 text-white outline-white bg-black hover:outline-black hover:text-blue-500 hover:bg-white active:outline-black active:text-blue-500'>
                Click
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Dark Mode</h3>
              <p className='text-sm text-center'>
                Remember modern sites come with a dark mode that inverts the colour theme.
              </p>
            </div>
          </article>
        </li>
        {/* 5 */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='w-[120px] mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Button
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Rounded XL</h3>
              <p className='text-sm text-center'>
                A popular button style - Well rounded edges and bold lettering with hover effects.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='w-[120px] mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'>
                Button
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Disabled</h3>
              <p className='text-sm text-center'>
                Occasionally you need a button but dont want user to press it.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                <svg
                  className='fill-current w-4 h-4 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                </svg>
                <span>Download</span>
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Download</h3>
              <p className='text-sm text-center'>
                Buttons are more than links. They can download files directly to your computer.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                type='button'
                className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                Button
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Gradiant</h3>
              <p className='text-sm text-center'>
                Colour gradients add a little depth to the button and you can even add an effect to clicked buttons.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                type='button'
                className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                Purple to Pink
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Gradiant swap</h3>
              <p className='text-sm text-center'>
                Reverce the colour gradient direction.
              </p>
            </div>
          </article>
        </li>
        {/*  */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Purple to blue
                </span>
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Colour Change</h3>
              <p className='text-sm text-center'>
                A variety of colour and hover and select effects.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                type='button'
                className='text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2'
              >
                <svg
                  className='w-4 h-4 mr-2 -ml-1'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='facebook-f'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z'
                  ></path>
                </svg>
                Sign in with Facebook
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Facebook</h3>
              <p className='text-sm text-center'>
                A button to automatically sign users in using Facebook accounts.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                type='button'
                className='text-gray-900 bg-white hover:bg-gray-100 border outline outline-1 outline-gray-300 border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2'
              >
                <svg
                  aria-hidden='true'
                  className='w-10 h-3 mr-2 -ml-1'
                  viewBox='0 0 660 203'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996'
                    fill='#0E4595'
                  />
                  <path
                    d='M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718'
                    fill='#F2AE14'
                  />
                </svg>
                Pay with Visa
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Payments</h3>
              <p className='text-sm text-center'>
                All forms of popular payment buttons available.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 mr-2 -ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                </svg>
                Buy now
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Buy Now</h3>
              <p className='text-sm text-center'>
                Store, cart and shopping assit buttons.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                type='button'
                className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Messages
                <span className='inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full'>
                  2
                </span>
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Indicator</h3>
              <p className='text-sm text-center'>
                Buttons with internal information such as number of new messages.
              </p>
            </div>
          </article>
        </li>
        {/* Loading button */}
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <button
                disabled
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
              >
                <svg
                  aria-hidden='true'
                  role='status'
                  className='inline w-4 h-4 mr-3 text-white animate-spin'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='#E5E7EB'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentColor'
                  />
                </svg>
                Loading...
              </button>
            </div>
            <div className='w-[300px] lg:w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Loading</h3>
              <p className='text-sm text-center'>
                Loading button with animated spinner.
              </p>
            </div>
          </article>
        </li>
        {/* Bar 1 */}
        <li className='md:col-span-2 mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='inline-flex rounded-md shadow-sm' role='group'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
              >
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 mr-2 fill-current'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Profile
              </button>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
              >
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 mr-2 fill-current'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
                </svg>
                Settings
              </button>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
              >
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 mr-2 fill-current'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Downloads
              </button>
            </div>
            <div className='w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Loading</h3>
              <p className='text-sm text-center'>
                Common selection menu bar. These can be links to other pages or open a drop down menu with further options.
              </p>
            </div>
          </article>
        </li>
        <li className='mb-10'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <div className='w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                <button
                  type='button'
                  className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
                >
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 mr-2 fill-current'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Profile
                </button>
                <button
                  type='button'
                  className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
                >
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 mr-2 fill-current'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
                  </svg>
                  Settings
                </button>
                <button
                  type='button'
                  className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
                >
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 mr-2 fill-current'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Messages
                </button>
                <button
                  type='button'
                  className='relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white'
                >
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 mr-2 fill-current'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Download
                </button>
              </div>
            </div>
            <div className='w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Nav Groups</h3>
              <p className='text-sm text-center'>
                Dropdown menu or available as a navigation menu. A variety of uses from a button group.
              </p>
            </div>
          </article>
        </li>
       
      
        <li className='mb-10 md:col-span-3'>
          <article className='grid gap-4 justify-center'>
            <AddFavBar />
            <div className='mx-auto'>
              <div className='border-b border-gray-200 dark:border-gray-700'>
                <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
                  <li className='mr-2'>
                    <button
                      
                      className='inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      Profile
                    </button>
                  </li>
                  <li className='mr-2'>
                    <button
                      className='inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                      aria-current='page'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 mr-2 text-blue-600 dark:text-blue-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                      </svg>
                      Dashboard
                    </button>
                  </li>
                  <li className='mr-2'>
                    <button
                      className='inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
                      </svg>
                      Settings
                    </button>
                  </li>
                  <li className='mr-2'>
                    <button
                      className='inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                        <path
                          fillRule='evenodd'
                          d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      Contacts
                    </button>
                  </li>
                  <li>
                    <button className='inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500'>
                      Disabled
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-[200px] grid gap-1 border-2 border-solid border-black rounded p-1'>
              <h3 className='pl-2'>Loading</h3>
              <p className='text-sm text-center'>
                Larger combination menu of buttons and navigation options.
              </p>
            </div>
          </article>
        </li>
       
      </ul>
    </section>
  );
}

export default Buttons;
