import React from 'react';
// Components
import AddFavBar from '../../utils/AddFavBar';

function PageItem({
  page,
  savedPages,
  setSavedPages,
  favoritePages,
  setFavoritePages,
}) {
  const { type, name, desc, image } = page;

  const addRemovePageToFavorites = (page) => {
    console.log('FAVORITES', page);
    console.log('favoritePages', favoritePages);
  };

  const addRemovePageToDesign = (page) => {
    console.log('DESIGN', page);
    console.log('savedPages', savedPages);
    let foundPage = savedPages.find((e) => e.name === page.name);

    if (foundPage) {
      let newSaves = savedPages
      let pageIndex = newSaves.indexOf((e) => e.name === foundPage.name);
      console.log('pageIndex', pageIndex);
      console.log('newArray', newSaves)
    }

    console.log('foundPage', foundPage);
    setSavedPages([...savedPages, page]);
  };

  return (
    <li className='border-2 dark:text-gray-100 border-black border-solid p-1 rounded'>
      <article>
        <div className='flex justify-between'>
          <div>
            <h3>{name}</h3>
            <h4 className='text-sm'>Type: {type}</h4>
          </div>
          <AddFavBar
            page={page}
            addRemovePageToFavorites={addRemovePageToFavorites}
            addRemovePageToDesign={addRemovePageToDesign}
          />
        </div>

        <img src={image} alt={`Page ${name} display`} />

        <p>{desc}</p>
      </article>
    </li>
  );
}

export default PageItem;
