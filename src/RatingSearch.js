import React from "react";
import Rating from "./Rating";

const RatingSearch = props => {
  return (
    <div className="rating">
      <span>Minimum Rating</span>
      <Rating
        rating={props.rating}
        onChange={indexstar => {
          props.onChangerat(indexstar);
        }}
      />
    </div>
  );
};

export default RatingSearch;
