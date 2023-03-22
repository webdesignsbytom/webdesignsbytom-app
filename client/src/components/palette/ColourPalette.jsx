import React, { useState } from 'react';
// Icons
import changeIcon from '../../assets/img/changeIcon.svg';
// Colour picker
import { SketchPicker } from 'react-color';
import Swatches from './Swatches';
import ColourItem from './ColourItem';

function ColourPalette({ colourPaletteObject, setColourPaletteObject }) {
  console.log('2. Palette', colourPaletteObject);

  const [currentColour, setCurrentColour] = useState({ background: '#000' });
  const [displayPicker, setDisplayPicker] = useState(false);
  console.log('currentColour', currentColour);

  const handleChangeComplete = (color) => {
    setCurrentColour({ background: color.hex });
  };

  const openPicker = (event) => {
    const { id } = event.target;
    console.log('id', id);
    setDisplayPicker(!displayPicker);
  };
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
      <section className='relative grid grid-rows-aa lg:grid-rows-2 gap-8 lg:gap-0'>
        {/* Colour Picker */}
        {displayPicker && (
          <div className='z-10 absolute top-0 cursor-pointer'>
            <SketchPicker
              color={currentColour.background}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        )}
        <section className='grid lg:grid-cols-xo'>
          {/* Swatches */}
          <div className='grid grid-cols-5 lg:ml-2 my-3'>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div
                className={`${cardOneBg} cursor-pointer`}
                id='cardOneBg'
                onClick={openPicker}
              ></div>
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
              <div
                className={`${cardTwoBg} cursor-pointer`}
                id='cardTwoBg'
                onClick={openPicker}
              ></div>
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
              <div
                className={`${cardThreeBg} cursor-pointer`}
                id='cardThreeBg'
                onClick={openPicker}
              ></div>
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
              <div
                className={`${cardFourBg} cursor-pointer`}
                id='cardFourBg'
                onClick={openPicker}
              ></div>
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
              <div
                className={`${cardFiveBg} cursor-pointer`}
                id='cardFiveBg'
                onClick={openPicker}
              ></div>
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
          <Swatches />
        </section>
        {/* Saved Options */}
        <section>
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 w-full'>
            {colourPaletteObject.map((colour, index) => {
              return (
                <ColourItem
                  key={index}
                  colour={colour}
                  openPicker={openPicker}
                />
              );
            })}
            {/* <li className='grid mx-6'>
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
                    {colourPaletteObject.mainBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin'
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    className={colourPaletteObject.mainBackground.css}
                    onClick={openPicker}
                  ></div>
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
                    {colourPaletteObject.altBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.altBackground.css}
                  ></div>
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
                    {colourPaletteObject.navBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin'
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.navBackground.css}
                  ></div>
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
                    {colourPaletteObject.darkModeBackground.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.darkModeBackground.css}
                  ></div>
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
                    {colourPaletteObject.mainText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.mainText.css}
                  ></div>
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
                    {colourPaletteObject.darkModeMainText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.darkModeMainText.css}
                  ></div>
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
                    {colourPaletteObject.altText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.altText.css}
                  ></div>
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
                    {colourPaletteObject.hoverText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.hoverText.css}
                  ></div>
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
                    {colourPaletteObject.darkModeHoverText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.darkModeHoverText.css}
                  ></div>
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
                    {colourPaletteObject.activeText.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.activeText.css}
                  ></div>
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
                    {colourPaletteObject.borders.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.borders.css}
                  ></div>
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
                    {colourPaletteObject.darkModeBorders.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    onClick={openPicker}
                    className={colourPaletteObject.darkModeBorders.css}
                  ></div>
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
                    {colourPaletteObject.hyperlinks.colour}
                  </h5>
                  <img
                    className='w-4 cursor-pointer focus:animate-spin active:animate-spin '
                    src={changeIcon}
                    alt='switch colour format'
                  />
                </div>
                <div className='border-2 cursor-pointer border-black border-solid rounded w-[30px] grid grid-rows-1 overflow-hidden'>
                  <div
                    id='hyperlinks'
                    onClick={openPicker}
                    className={colourPaletteObject.hyperlinks.css}
                  ></div>
                </div>
              </div>
            </li> */}
          </ul>
        </section>
      </section>
    </section>
  );
}

export default ColourPalette;
