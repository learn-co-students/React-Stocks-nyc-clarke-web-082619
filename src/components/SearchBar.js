import React from "react";

const sortOnChange = (props, sort) => {
  props.sortOnChange(sort);
};

const filterOnChange = (props, filter) => {
  props.filterOnChange(filter);
};

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={props.sort === "alphabetical" ? true : false}
          onChange={() => {
            sortOnChange(props, "alphabetical");
          }}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={props.sort === "price" ? true : false}
          onChange={() => {
            sortOnChange(props, "price");
          }}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select
          onChange={event => {
            filterOnChange(props, event.target.value);
          }}
        >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
