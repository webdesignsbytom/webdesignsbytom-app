import React, { useState } from 'react';
// Icons
import changeIcon from '../../img/changeIcon.svg';
import QuestionMark from '../../img/questionMark.svg';

function ColorPalette({ colourPalette, setColourPalette }) {
  console.log('2. Palette', colourPalette);
  // Card One
  const [cardOneBg, setCardOneBg] = useState('bg-[#0099ff]');
  const [rgbCardOne, setRgbCardOne] = useState('#0099ff');
  const [hexCardOne, setHexCardOne] = useState('#0099ff');
  const [hlsCardOne, setHlsCardOne] = useState('#0099ff');
  // Card two
  const [cardTwoBg, setCardTwoBg] = useState('bg-[#00ff00]');
  const [rgbCardTwo, setRgbCardTwo] = useState('#0099ff');
  const [hexCardTwo, setHexCardTwo] = useState('#0099ff');
  const [hlsCardTwo, setHlsCardTwo] = useState('#0099ff');
  // Card three
  const [cardThreeBg, setCardThreeBg] = useState('bg-[#ff0000]');
  const [rgbCardThree, setRgbCardThree] = useState('#0099ff');
  const [hexCardThree, setHexCardThree] = useState('#0099ff');
  const [hlsCardThree, setHlsCardThree] = useState('#0099ff');
  // Card four
  const [cardFourBg, setCardFourBg] = useState('bg-[#ffff00]');
  const [rgbCardFour, setRgbCardFour] = useState('#0099ff');
  const [hexCardFour, setHexCardFour] = useState('#0099ff');
  const [hlsCardFour, setHlsCardFour] = useState('#0099ff');
  // Card five
  const [cardFiveBg, setCardFiveBg] = useState('bg-[#669999]');
  const [rgbCardFive, setRgbCardFive] = useState('#0099ff');
  const [hexCardFive, setHexCardFive] = useState('#0099ff');
  const [hlsCardFive, setHlsCardFive] = useState('#0099ff');

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
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardOneBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardOne}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HEX</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hexCardOne}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HLS</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hlsCardOne}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardTwoBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardTwo}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HEX</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hexCardTwo}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HLS</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hlsCardTwo}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardThreeBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardThree}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HEX</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hexCardThree}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HLS</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hlsCardThree}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardFourBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardFour}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HEX</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hexCardFour}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HLS</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hlsCardFour}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardFiveBg}></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardFive}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HEX</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hexCardFive}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>HLS</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={hlsCardFive}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
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
              <h4>Warm Yellow</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-yellow-700'></div>
                <div className='h-6 bg-yellow-300'></div>
                <div className='h-6 bg-yellow-200'></div>
                <div className='h-6 bg-yellow-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Natural Green</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-green-700'></div>
                <div className='h-6 bg-green-300'></div>
                <div className='h-6 bg-green-200'></div>
                <div className='h-6 bg-green-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Deep Red</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-red-700'></div>
                <div className='h-6 bg-red-300'></div>
                <div className='h-6 bg-red-200'></div>
                <div className='h-6 bg-red-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
            <div className='px-2'>
              <h4>Ocean Blue</h4>
              <article className='grid grid-cols-6 border-solid border-black border-[1px]'>
                <div className='h-6 bg-blue-700'></div>
                <div className='h-6 bg-blue-300'></div>
                <div className='h-6 bg-blue-200'></div>
                <div className='h-6 bg-blue-500'></div>
                <div className='h-6 bg-white'></div>
                <div className='h-6 bg-black'></div>
              </article>
            </div>
          </section>
        </section>
        {/* Saved Options */}
        <section>
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 w-full'>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Main Background</h4>
                <div className='relative group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
                    Main Background colour.
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information for colour palette selection'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
                    src={QuestionMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle w-[160px] cursor-pointer right-0 bottom-0 z-10'>
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
