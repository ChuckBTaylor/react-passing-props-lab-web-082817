import React from 'react';

import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  console.log("Fruit basket props", props);
  return (
    <div className="fruit-basket">
      <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: ['all', 'berry', 'pepo', 'pome', 'citrus', 'drupe', 'other'],
  currentFilter: null,
  updateFilterCallback: () => console.log("")
}

export default FruitBasket;
