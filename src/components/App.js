import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';


class App extends React.Component{
  state= {
      filters: [],
      items: [],
      currentFilter: null,
      fruit: []
  }

  changeFilter = (ev) => {
    const newFilter = {currentFilter: ev.target.value}
    this.setState(newFilter)
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => {
      this.setState({ filters })
    });
  }

  fetchFruit = () => {
    fetch('/api/fruit')
    .then(res => res.json())
    .then(items => this.setState({items}))
  }

  render(){
    return (
      <div>
        <Filter filters={this.state.filters} handleChange={this.changeFilter}/>
        <FruitBasket fruit={this.state.items} currentFilter={this.state.currentFilter}/>
      </div>
    )
  }

  componentDidMount = () => {
    this.fetchFilters()
    this.fetchFruit()
  }
}

export default App;
