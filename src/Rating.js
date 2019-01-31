import React from "react";

const noop = () => {};

const Rating = ({ rating, onChange = noop }) => {
  let stars = [];
  for (let i = 1; i < 6; i++) {
    if (i <= rating)
      stars.push(
        <span onClick={() => onChange(i)} key={i}>
          ★
        </span>
      );
    else
      stars.push(
        <span onClick={() => onChange(i)} key={i}>
          ☆
        </span>
      );
  }
  return <div> {stars} </div>;
};

export default Rating;
