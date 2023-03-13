import React, { useState } from 'react';
// Icons
import changeIcon from '../../img/changeIcon.svg';
import QMark from '../../img/questionMark.svg';
function ColorPalette({ colourPalette, setColourPalette }) {
  console.log('2. Palette', colourPalette);
  const [cardOneBg, setCardOneBg] = useState('bg-[#0099ff]');
  const [cardTwoBg, setCardTwoBg] = useState('bg-[#00ff00]');
  const [cardThreeBg, setCardThreeBg] = useState('bg-[#ff0000]');
  const [cardFourBg, setCardFourBg] = useState('bg-[#ffff00]');
  const [cardFiveBg, setCardFiveBg] = useState('bg-[#669999]');

  return (
    <section className='grid grid-rows-reg'>
      <div className='text-center flex justify-between'>
        <div className='relative group flex align-middle h-full'>
          <img
            src={changeIcon}
            className='w-5 ml-4 mt-3 cursor-pointer focus:animate-spin active:animate-spin'
            alt='randomize all colours'
          />
          <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:left-0 lg:top-0 z-10 ml-8 mt-8'>
            Randomize all colours.
          </div>
        </div>
        <h2>Create the theme and style for your website</h2>
        <div></div>
      </div>
      {/* Main */}
      <section className='grid grid-rows-aa lg:grid-rows-2 gap-8 lg:gap-0'>
        {/* Colour Picker */}
        <section className='grid lg:grid-cols-xo'>
          {/* Swatches */}
          <div className='grid grid-cols-5 lg:ml-2 my-3'>
            <div className='relative grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardOneBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>RGB</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HEX</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HSL</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardTwoBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>RGB</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HEX</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HSL</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardThreeBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>RGB</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HEX</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HSL</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardFourBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>RGB</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HEX</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HSL</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardFiveBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>RGB</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HEX</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
                <div className='lg:flex justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden'>
                  <h5 className='pl-1 lg:pl-0'>HSL</h5>
                  <input
                    type='text'
                    className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-[75px] pl-1'
                  />
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
          </div>
          {/* Result cods */}
          <section className='h-min'>
            <div className='px-2'>
              <h4>Cool Slate</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-slate-700'></div>
                <div className='h-6 bg-slate-300'></div>
                <div className='h-6 bg-slate-200'></div>
                <div className='h-6 bg-slate-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Cool Slate</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-slate-700'></div>
                <div className='h-6 bg-slate-300'></div>
                <div className='h-6 bg-slate-200'></div>
                <div className='h-6 bg-slate-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Cool Slate</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-slate-700'></div>
                <div className='h-6 bg-slate-300'></div>
                <div className='h-6 bg-slate-200'></div>
                <div className='h-6 bg-slate-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Cool Slate</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-slate-700'></div>
                <div className='h-6 bg-slate-300'></div>
                <div className='h-6 bg-slate-200'></div>
                <div className='h-6 bg-slate-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Cool Slate</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-slate-700'></div>
                <div className='h-6 bg-slate-300'></div>
                <div className='h-6 bg-slate-200'></div>
                <div className='h-6 bg-slate-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
          </section>
        </section>
        {/* Saved Options */}
        <section>
          <ul className='grid lg:grid-cols-3 w-full'>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Main Background</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    Enter a name to save your design with
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.mainBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.mainBackground.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Alt Background</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information for colour palette selection'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    A colour to compliment the main background.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.altBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.altBackground.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Nav Background</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    Usually a dark background. Can be semi-transparent or even
                    see through.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.navBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin'
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.navBackground.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Dark Mode Background</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    Part of your SEO requires you to have the entire site
                    available in an alternate dark colour scheme.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.darkModeBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.darkModeBackground.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Main Text</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    Primary font colour for general text.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.mainText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.mainText.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Dark Mode Main Text</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    In dark mode alternate your text to contrast the background.
                    Dark modes are part of your SEO requirements.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.darkModeMainText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.darkModeMainText.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Alt Text</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    Alternative text colour for highlighting headers, titles or
                    specific words.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.altText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.altText.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Hover Text</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    To highlight the text the user hovers on. For a smooth
                    interactive user experience.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.hoverText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.hoverText.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Dark Mode Hover Text</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    A slightly darker colour than your text to highlight when
                    hovered over.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.darkModeHoverText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.darkModeHoverText.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Active Text</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    For clicked on links and selected navigation links.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.activeText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.activeText.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Borders</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    The colour for all your borders throughout the site.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.borders.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.borders.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Borders</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    In dark mode alternate your border colour as well.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.darkModeBorders.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.darkModeBorders.css}></div>
                </div>
              </div>
            </li>
            <li className='grid mx-6 mb-2'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Hyperlinks</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer lg:right-0 lg:bottom-0'>
                    To make links stand out as part of your SEO, hyperlinks get
                    a noticable colour.
                  </div>
                </div>
              </div>
              <div className='flex justify-center gap-1'>
                <div className='flex justify-between bg-white border-2 border-black border-solid rounded w-full px-2'>
                  <h5 className='align-middle'>
                    {colourPalette.hyperlinks.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div className={colourPalette.hyperlinks.css}></div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}

export default ColorPalette;
