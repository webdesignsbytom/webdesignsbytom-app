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
      <div className='text-center'>
        <h2>Create the theme and style for your website</h2>
      </div>
      {/* Main */}
      <section className='grid grid-rows-2'>
        {/* Colour Picker */}
        <section className='grid grid-cols-xo'>
          {/* Swatches */}
          <div className='grid grid-cols-5 ml-2 my-3'>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardOneBg}></div>
              <article className='h-min text-xs'>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  RGB
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HEX
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HSL
                </h5>
              </article>
              <img src={changeIcon} className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin' alt="change to new random colour" />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardTwoBg}></div>
              <article className='h-min text-xs'>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  RGB
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HEX
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HSL
                </h5>
              </article>
              <img src={changeIcon} className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin' alt="change to new random colour" />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardThreeBg}></div>
              <article className='h-min text-xs'>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  RGB
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HEX
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HSL
                </h5>
              </article>
              <img src={changeIcon} className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin' alt="change to new random colour" />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardFourBg}></div>
              <article className='h-min text-xs'>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  RGB
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HEX
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HSL
                </h5>
              </article>
              <img src={changeIcon} className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin' alt="change to new random colour" />
            </div>
            <div className='relative grid grid-rows-rev border-2 border-black border-solid rounded'>
              <div className={cardFiveBg}></div>
              <article className='h-min text-xs'>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  RGB
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HEX
                </h5>
                <h5 className='border-t-2 border-black border-solid px-2 py-1'>
                  HSL
                </h5>
              </article>
              <img src={changeIcon} className='w-5 absolute right-1 top-1 cursor-pointer focus:animate-spin active:animate-spin' alt="change to new random colour" />
            </div>
          </div>
          {/* Result cods */}
          <section>
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
          <ul className='grid grid-cols-3 w-full'>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Main Background</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
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
                  <div className={colourPalette.mainBackground.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Alt Background</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
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
                  <div className={colourPalette.altBackground.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Nav Background</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    Usually a dark background. Can be semi-transparent or even see through.
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
                  <div className={colourPalette.navBackground.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Dark Mode Background</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    Part of your SEO requires you to have the entire site available in an alternate dark colour scheme.
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
                  <div className={colourPalette.darkModeBackground.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Main Text</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
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
                  <div className={colourPalette.mainText.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Dark Mode Main Text</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    In dark mode alternate your text to contrast the background. Dark modes are part of your SEO requirements.
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
                  <div className={colourPalette.darkModeMainText.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Alt Text</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    Alternative text colour for highlighting headers, titles or specific words.
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
                  <div className={colourPalette.altText.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Hover Text</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    To highlight the text the user hovers on. For a smooth interactive user experience.
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
                  <div className={colourPalette.hoverText.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Dark Mode Hover Text</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    A slightly darker colour than your text to highlight when hovered over.
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
                  <div className={colourPalette.darkModeHoverText.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Active Text</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
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
                  <div className={colourPalette.activeText.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Borders</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
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
                  <div className={colourPalette.borders.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Borders</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
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
                  <div className={colourPalette.darkModeBorders.css}>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid mx-6'>
              <div className='flex justify-between gap-2 mx-[3px] mb-[2px]'>
                <h4 className='text-sm mt-1'>Hyperlinks</h4>
                <div className='group flex align-middle h-full pl-1 pt-1'>
                  <img
                    src={QMark}
                    className='w-5 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                    alt='information'
                    data-te-animation-init
                  />
                  <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                    To make links stand out as part of your SEO, hyperlinks get a noticable colour.
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
                  <div className={colourPalette.hyperlinks.css}>
                  </div>
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
