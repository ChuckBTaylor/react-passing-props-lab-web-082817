import React from 'react';

const FilteredFruitList = (props) => {
  console.log(props,'from the list');
  if(!props.fruit){
    console.log("ITEMS ARE UNDEFINED HERE");
  }
  const list = !props.filter || props.filter === 'all' ? (props.fruit) : (props.fruit.filter(i => i.fruit_type === props.filter))
  console.log(list, "the list from the list");
  if(!list){
    console.log("LIST IS UNDEFINED HERE");
  }
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: 'fruit',
  list: [],
  filter: null,
  items: []
}

export default FilteredFruitList;
