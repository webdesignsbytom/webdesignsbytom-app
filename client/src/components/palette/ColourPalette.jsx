import React, { useState } from 'react';
// Icons
import changeIcon from '../../assets/svg/changeIcon.svg';
import { RxCross2 } from 'react-icons/rx';
// Colour picker
import { SketchPicker } from 'react-color';
import Swatches from './Swatches';
import ColourItem from './ColourItem';

function ColourPalette({ colourPaletteObject, setColourPaletteObject }) {
  const [currentColour, setCurrentColour] = useState({
    hex: '#ff0000',
  });
  const [cardOrSwatch, setCardOrSwatch] = useState('card');
  const [selectedCard, setSelectedCard] = useState('cardOneBg');
  const [currentSwatch, setCurrentSwatch] = useState({});
  const [displayPicker, setDisplayPicker] = useState(false);
  const [displayBigPicker, setDisplayBigPicker] = useState(false);
  const [displaySmallPicker, setDisplaySmallPicker] = useState({
    mainBackground: false,
    altBackground: false,
    navBackground: false,
    darkModeBackground: false,
    mainText: false,
    darkModeMainText: false,
    altText: false,
    hoverText: false,
    darkModeHoverText: false,
    activeText: false,
    borders: false,
    darkModeBorders: false,
    hyperlinks: false,
  });

  // Card One
  const [cardOneBg, setCardOneBg] = useState('#0099ff');
  const [hexCardOne, setHexCardOne] = useState('#0099ff');
  const [rgbCardOne, setRgbCardOne] = useState('#0099ff');
  const [hlsCardOne, setHlsCardOne] = useState('#0099ff');

  // Card two
  const [cardTwoBg, setCardTwoBg] = useState('#00ff00');
  const [rgbCardTwo, setRgbCardTwo] = useState('#0099ff');
  const [hexCardTwo, setHexCardTwo] = useState('#0099ff');
  const [hlsCardTwo, setHlsCardTwo] = useState('#0099ff');
  // Card three
  const [cardThreeBg, setCardThreeBg] = useState('#ff0000');
  const [rgbCardThree, setRgbCardThree] = useState('#0099ff');
  const [hexCardThree, setHexCardThree] = useState('#0099ff');
  const [hlsCardThree, setHlsCardThree] = useState('#0099ff');
  // Card four
  const [cardFourBg, setCardFourBg] = useState('#ffff00');
  const [rgbCardFour, setRgbCardFour] = useState('#0099ff');
  const [hexCardFour, setHexCardFour] = useState('#0099ff');
  const [hlsCardFour, setHlsCardFour] = useState('#0099ff');
  // Card five
  const [cardFiveBg, setCardFiveBg] = useState('#0000ff');
  const [rgbCardFive, setRgbCardFive] = useState('#0099ff');
  const [hexCardFive, setHexCardFive] = useState('#0099ff');
  const [hlsCardFive, setHlsCardFive] = useState('#0099ff');

  const setRandomCard = (event) => {
    const { id, title } = event.target;
    console.log('ID', id, title);

    let num1 = Math.floor(Math.random() * 255) + 1;
    let num2 = Math.floor(Math.random() * 255) + 1;
    let num3 = Math.floor(Math.random() * 255) + 1;

    function valueToHex(c) {
      var hex = c.toString(16);
      return hex;
    }

    let news = valueToHex(num1) + valueToHex(num2) + valueToHex(num3);
    console.log('news', news);

    if (id === 'cardOneBg') {
      setCardOneBg(`#${news}`);
      setHexCardOne(`#${news}`);

      setRgbCardOne(`r:${num1} g:${num2} b:${num3}`);
      // setHlsCardOne(hsl4);
    }
    if (id === 'cardTwoBg') {
      setCardTwoBg(`#${news}`);
      setHexCardTwo(`#${news}`);

      setRgbCardTwo(`r:${num1} g:${num2} b:${num3}`);
      // setHlsCardTwo(hsl42);
    }
    if (id === 'cardThreeBg') {
      setCardThreeBg(`#${news}`);
      setHexCardThree(`#${news}`);

      setRgbCardThree(`r:${num1} g:${num2} b:${num3}`);
      // setHlsCardThree(hsl43);
    }
    if (id === 'cardFourBg') {
      setCardFourBg(`#${news}`);
      setHexCardFour(`#${news}`);

      setRgbCardFour(`r:${num1} g:${num2} b:${num3}`);
      // setHlsCardFour(hsl44);
    }
    if (id === 'cardFiveBg') {
      setCardFiveBg(`#${news}`);
      setHexCardFive(`#${news}`);

      setRgbCardFive(`r:${num1} g:${num2} b:${num3}`);
      // setHlsCardFive(hsl45);
    }
  };

  const setNewColour = (event) => {
    if (cardOrSwatch === 'card') {
      if (selectedCard === 'cardOneBg') {
        setCardOneBg(currentColour.hex);
        setHexCardOne(currentColour.hex);

        const newRgb = JSON.stringify(currentColour.rgb);
        const newHsl = JSON.stringify(currentColour.hsl);

        let rgb1 = newRgb.slice(1); // "ello World!";
        let rgb2 = rgb1.slice(0, -1); // "ello World!";
        var rgb3 = rgb2.replace(/"/g, '');
        var rgb4 = rgb3.replace(/,/g, ' ');
        setRgbCardOne(rgb4);

        let hsl1 = newHsl.slice(1); // "ello World!";
        let hsl2 = hsl1.slice(0, -1); // "ello World!";
        var hsl3 = hsl2.replace(/"/g, '');
        var hsl4 = hsl3.replace(/,/g, ' ');
        setHlsCardOne(hsl4);
      }
      if (selectedCard === 'cardTwoBg') {
        setCardTwoBg(currentColour.hex);
        setHexCardTwo(currentColour.hex);

        const newRgb = JSON.stringify(currentColour.rgb);
        const newHsl = JSON.stringify(currentColour.hsl);

        let rgb12 = newRgb.slice(1); // "ello World!";
        let rgb22 = rgb12.slice(0, -1); // "ello World!";
        var rgb32 = rgb22.replace(/"/g, '');
        var rgb42 = rgb32.replace(/,/g, ' ');
        setRgbCardTwo(rgb42);

        let hsl12 = newHsl.slice(1); // "ello World!";
        let hsl22 = hsl12.slice(0, -1); // "ello World!";
        var hsl32 = hsl22.replace(/"/g, '');
        var hsl42 = hsl32.replace(/,/g, ' ');
        setHlsCardTwo(hsl42);
      }
      if (selectedCard === 'cardThreeBg') {
        setCardThreeBg(currentColour.hex);
        setHexCardThree(currentColour.hex);

        const newRgb = JSON.stringify(currentColour.rgb);
        const newHsl = JSON.stringify(currentColour.hsl);

        let rgb13 = newRgb.slice(1); // "ello World!";
        let rgb23 = rgb13.slice(0, -1); // "ello World!";
        var rgb33 = rgb23.replace(/"/g, '');
        var rgb43 = rgb33.replace(/,/g, ' ');
        setRgbCardThree(rgb43);

        let hsl13 = newHsl.slice(1); // "ello World!";
        let hsl23 = hsl13.slice(0, -1); // "ello World!";
        var hsl33 = hsl23.replace(/"/g, '');
        var hsl43 = hsl33.replace(/,/g, ' ');
        setHlsCardThree(hsl43);
      }
      if (selectedCard === 'cardFourBg') {
        setCardFourBg(currentColour.hex);
        setHexCardFour(currentColour.hex);

        const newRgb = JSON.stringify(currentColour.rgb);
        const newHsl = JSON.stringify(currentColour.hsl);

        let rgb14 = newRgb.slice(1); // "ello World!";
        let rgb24 = rgb14.slice(0, -1); // "ello World!";
        var rgb34 = rgb24.replace(/"/g, '');
        var rgb44 = rgb34.replace(/,/g, ' ');
        setRgbCardFour(rgb44);

        let hsl14 = newHsl.slice(1); // "ello World!";
        let hsl24 = hsl14.slice(0, -1); // "ello World!";
        var hsl34 = hsl24.replace(/"/g, '');
        var hsl44 = hsl34.replace(/,/g, ' ');
        setHlsCardFour(hsl44);
      }
      if (selectedCard === 'cardFiveBg') {
        setCardFiveBg(currentColour.hex);
        setHexCardFive(currentColour.hex);

        const newRgb = JSON.stringify(currentColour.rgb);
        const newHsl = JSON.stringify(currentColour.hsl);

        let rgb15 = newRgb.slice(1); // "ello World!";
        let rgb25 = rgb15.slice(0, -1); // "ello World!";
        var rgb35 = rgb25.replace(/"/g, '');
        var rgb45 = rgb35.replace(/,/g, ' ');
        setRgbCardFive(rgb45);

        let hsl15 = newHsl.slice(1); // "ello World!";
        let hsl25 = hsl15.slice(0, -1); // "ello World!";
        var hsl35 = hsl25.replace(/"/g, '');
        var hsl45 = hsl35.replace(/,/g, ' ');
        setHlsCardFive(hsl45);
      }
      setDisplayPicker(false);
    }

    if (cardOrSwatch === 'swatch') {
      console.log('HELLLO', selectedCard);
      let update = currentSwatch;
      update.css = currentColour.hex;
      update.colour = currentColour.hex;
      setDisplaySmallPicker(false);
    }
  };

  const openPicker = (event) => {
    const { id, title } = event.target;

    setCardOrSwatch(title);

    setSelectedCard(id);
    setDisplayPicker(!displayPicker);
  };

  const openSmallPicker = (colour) => {
    setCardOrSwatch(colour.type);
    setSelectedCard(colour.id);
    setCurrentSwatch(colour);
    setDisplaySmallPicker({
      ...displaySmallPicker,
      [colour.id]: true,
    });
  };

  const openBigPicker = (colour) => {
    setCardOrSwatch(colour.type);
    setSelectedCard(colour.id);
    setCurrentSwatch(colour);
    setDisplayBigPicker(true);
  };

  const newBreak = () => {
    return;
  };

  const closeColourPicker = () => {
    setDisplayPicker(false);
  };

  const closeSmallColourPicker = () => {
    setDisplaySmallPicker(false);
  };

  const closeBigColourPicker = () => {
    setDisplayBigPicker(false);
  };

  const handleChangeComplete = (color) => {
    setCurrentColour({ hex: color.hex, rgb: color.rgb, hsl: color.hsl });
  };

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
          <div className='z-10 bg-white border-2 border-black border-solid dark:border-white dark:bg-black rounded p-1 absolute top-0 cursor-pointer'>
            <div className='flex justify-end my-1'>
              <RxCross2 onClick={closeColourPicker} />
            </div>
            <SketchPicker
              color={currentColour.hex}
              onChange={handleChangeComplete}
            />
            <div className='flex justify-center my-2'>
              <button
                onClick={setNewColour}
                className={`py-1 px-3 outline outine-black outline-1 rounded-lg hover:bg-red-500`}
              >
                SET COLOUR
              </button>
            </div>
          </div>
        )}
        {displayBigPicker && (
          <div className='z-10 bg-white border-2 border-black border-solid dark:border-white dark:bg-black rounded p-1 absolute top-0 cursor-pointer'>
            <div className='flex justify-end my-1'>
              <RxCross2 onClick={closeBigColourPicker} />
            </div>
            <SketchPicker
              color={currentColour.hex}
              onChange={handleChangeComplete}
            />
            <div className='flex justify-center my-2'>
              <button
                onClick={setNewColour}
                className={`py-1 px-3 outline outine-black outline-1 rounded-lg hover:bg-red-500`}
              >
                SET COLOUR
              </button>
            </div>
          </div>
        )}
        <section className='grid lg:grid-cols-xo'>
          {/* Swatches */}
          <div className='grid grid-cols-5 lg:ml-2 my-3'>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div
                className={`cursor-pointer`}
                style={{ backgroundColor: `${cardOneBg}` }}
                id='cardOneBg'
                title='card'
                onClick={openPicker}
              ></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardOne}
                      onChange={newBreak}
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
                      onChange={newBreak}
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
                      onChange={newBreak}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                onClick={setRandomCard}
                id='cardOneBg'
                title='card'
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div
                className={`cursor-pointer`}
                style={{ backgroundColor: `${cardTwoBg}` }}
                id='cardTwoBg'
                title='card'
                onClick={openPicker}
              ></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardTwo}
                      onChange={newBreak}
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
                      onChange={newBreak}
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
                      onChange={newBreak}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                onClick={setRandomCard}
                id='cardTwoBg'
                title='card'
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div
                className={`cursor-pointer`}
                style={{ backgroundColor: `${cardThreeBg}` }}
                id='cardThreeBg'
                title='card'
                onClick={openPicker}
              ></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardThree}
                      onChange={newBreak}
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
                      onChange={newBreak}
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
                      onChange={newBreak}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                onClick={setRandomCard}
                id='cardThreeBg'
                title='card'
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div
                className={`cursor-pointer`}
                style={{ backgroundColor: `${cardFourBg}` }}
                id='cardFourBg'
                title='card'
                onClick={openPicker}
              ></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardFour}
                      onChange={newBreak}
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
                      onChange={newBreak}
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
                      onChange={newBreak}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                onClick={setRandomCard}
                id='cardFourBg'
                title='card'
                src={changeIcon}
                className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin'
                alt='change to new random colour'
              />
            </div>
            <div className='relative overflow-hidden grid min-h-[225px] grid-rows-rev border-2 border-black border-solid rounded'>
              <div
                className={`cursor-pointer`}
                style={{ backgroundColor: `${cardFiveBg}` }}
                id='cardFiveBg'
                title='card'
                onClick={openPicker}
              ></div>
              <article className='h-min text-xs'>
                <div className='lg:flex gap-2 justify-between border-t-2 border-black border-solid lg:px-2 py-1 overflow-hidden '>
                  <h5 className='pl-2 lg:pl-0'>RGB</h5>
                  <div className='px-1 sm:px-2 lg:px-0'>
                    <input
                      type='text'
                      value={rgbCardFive}
                      onChange={newBreak}
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
                      onChange={newBreak}
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
                      onChange={newBreak}
                      className='text-placeholder-text text-xs bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none w-full pl-1'
                    />
                  </div>
                </div>
              </article>
              <img
                onClick={setRandomCard}
                id='cardFiveBg'
                title='card'
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
          <ul className='grid md:grid-cols-2 pb-4 lg:pb-0 lg:grid-cols-3 w-full'>
            {colourPaletteObject.map((colour, index) => {
              return (
                <ColourItem
                  key={index}
                  openBigPicker={openBigPicker}
                  colour={colour}
                  openPicker={openPicker}
                  openSmallPicker={openSmallPicker}
                  currentColour={currentColour}
                  closeSmallColourPicker={closeSmallColourPicker}
                  handleChangeComplete={handleChangeComplete}
                  setNewColour={setNewColour}
                  displaySmallPicker={displaySmallPicker}
                />
              );
            })}
          </ul>
        </section>
      </section>
    </section>
  );
}

export default ColourPalette;
