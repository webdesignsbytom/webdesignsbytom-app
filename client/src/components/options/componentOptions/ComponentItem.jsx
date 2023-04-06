import React from 'react';
// Components
import AddFavBar from '../../utils/AddFavBar';

function ComponentItem({
  component,
  savedComponents,
  setSavedComponents,
  favoriteComponents,
  setFavoriteComponents,
}) {
  const { type, name, desc, image } = component;

  const addRemoveComponentToFavorites = (component) => {
    console.log('FAVORITES', component);
    console.log('favoriteComponents', favoriteComponents);
  };

  const addRemoveComponentToDesign = (component) => {
    let foundComponent = savedComponents.find((e) => e.name === component.name);

    if (foundComponent) {
      let newArray = savedComponents;
      let componentName = foundComponent.name;
      let index = newArray.findIndex((e) => e.name === componentName);
      newArray.splice(index, 1);
      setSavedComponents(newArray);
      return;
    }

    setSavedComponents([...savedComponents, component]);
  };

  return (
    <li className='border-2 dark:text-gray-100 border-black dark:border-gray-400 border-solid p-1 rounded'>
      <article>
        <div className='flex justify-between'>
          <div>
            <h3>{name}</h3>
            <h4 className='text-sm'>Type: {type}</h4>
          </div>
          <AddFavBar
            object={component}
            addRemoveFavorites={addRemoveComponentToFavorites}
            addRemoveDesign={addRemoveComponentToDesign}
          />
        </div>

        <img src={image} alt='page example' />

        <p>{desc}</p>
      </article>
    </li>
  );
}

export default ComponentItem;
