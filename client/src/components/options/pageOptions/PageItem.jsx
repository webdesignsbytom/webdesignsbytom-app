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
    let foundPage = savedPages.find((e) => e.name === page.name);

    if (foundPage) {
      let newArray = savedPages
      let pageName = foundPage.name
      let index = newArray.findIndex((e) => e.name === pageName)
      newArray.splice(index, 1);
      setSavedPages(newArray);
      return 
    }

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
            object={page}
            addRemoveFavorites={addRemovePageToFavorites}
            addRemoveDesign={addRemovePageToDesign}
          />
        </div>

        <img src={image} alt={`Page ${name} display`} />

        <p>{desc}</p>
      </article>
    </li>
  );
}

export default PageItem;
