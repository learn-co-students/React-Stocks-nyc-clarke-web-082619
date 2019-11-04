import React from 'react';

const SearchBar = (props) => {

  const handleFilter = (event) => {
    props.filterStocks(event.target.value);
  }

  const handleSort = (event) => {
    props.sortStocks(event.target.value);
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically" ? true : false} onChange={handleSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "Price" ? true : false} onChange={handleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
