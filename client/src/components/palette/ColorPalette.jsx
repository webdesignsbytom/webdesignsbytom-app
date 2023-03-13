import React from 'react';

function ColorPalette() {
  return (
    <section className='grid grid-rows-reg'>
      <div className='text-center'>
        <h2>ColorPalette</h2>
        <h3>Create the theme and style for your website</h3>
      </div>
      {/* Main */}
      <section className='grid grid-rows-2'>
        {/* Colour Picker */}
        <section className='bg-red-300 grid grid-cols-xo'>
          {/* Swatches */}
          <div className='grid grid-cols-5'>
            <div className='border-2 border-black border-solid rounded'>1</div>
            <div className='border-2 border-black border-solid rounded'>2</div>
            <div className='border-2 border-black border-solid rounded'>3</div>
            <div className='border-2 border-black border-solid rounded'>4</div>
            <div className='border-2 border-black border-solid rounded'>5</div>
          </div>
          {/* Result cods */}
          <section>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </section>
        </section>
        {/* Saved Options */}
        <section className='bg-yellow-300'>
          <ul className='grid grid-cols-3'>
            <li>
              <div>
                <h4>Main Background:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Alt Background:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Nav Background:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Dark Mode Background:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Main Text:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Dark Mode Main Text:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Alt Text:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Hover Text:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Dark Mode Hover Text:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Active Text:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Borders:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
                </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Hyperlinks:</h4>
              </div>
              <div className='flex'>
                <h5>#6rd8sh</h5>
                <div className='border-2 border-black border-solid rounded w-[30px]'>
                  C
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
