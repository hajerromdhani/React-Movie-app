import React from "react";
import Rating from "./Rating";

const MovieCard = props => {
  return (
    <div className="movie-card">
      <div className="movie-rating">
        <Rating rating={props.movies.rate} />
      </div>
      <div
        className="movie-img"
        style={{
          backgroundImage: `url(${props.movies.img})`,
          backgroundSize: "cover",
          backgrouondRepeat: "no-repeat",
          height: "100%"
        }}
      />
      <div className="movie-title">
        <span>{props.movies.title} - </span>
        <span>{props.movies.year}</span>
      </div>
      <div>
        <input
          type="button"
          value="X"
          onClick={() => props.remove(props.movies.id)}
        />
      </div>
    </div>
  );
};

export default MovieCard;
