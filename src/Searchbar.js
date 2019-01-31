import React from "react";

const Searchbar = props => {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="input"
        onChange={event => {
          props.getTitle(event.target.value);
        }}
      />
      <button>search</button>
    </div>
  );
};
export default Searchbar;
