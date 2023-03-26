import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';

const navItemOptionsList = [
  {
    title: `Menu Links`,
    id: 'menu-links',
    icon: 'Home About Contact',
  },
  {
    title: `Social Media`,
    id: 'social-media',
    icon: <BsLinkedin size={20} />,
  },
  {
    title: `Logo`,
    id: 'logo',
    icon: 'AZ',
  },
  {
    title: `Mobile Burger Menu`,
    id: 'burger-menu',
    icon: '=',
  },
  {
    title: `Search Bar`,
    id: 'search-bar',
    icon: <BiSearchAlt2 />,
  },
  {
    title: `DropDown Menu`,
    id: 'dropdown-menu',
    icon: 'Menu',
  },
];

function NavItemsList({ selectNavBarOption }) {
  return (
    <section className='grid grid-cols-2 gap-1 p-2'>
      {navItemOptionsList.map((item, index) => {
        return (
          <button
            key={index}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => selectNavBarOption(item)}
            id={item.id}
          >
            {item.title}
          </button>
        );
      })}
    </section>
  );
}

export default NavItemsList;
