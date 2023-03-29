import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
import Logo from '../../assets/img/logos/wdbt-white.png'
import Logo2 from '../../assets/img/logos/image.png'
import Logo3 from '../../assets/img/logos/WD-02.png'
import Logo4 from '../../assets/img/logos/WD-04.svg'

function TestPage() {
  return (
    <div className='grid relative bg-black h-[100vh] w-full'>
    <img src={Logo4} className='w-20' alt="" />
    </div>
  );
}

export default TestPage;
