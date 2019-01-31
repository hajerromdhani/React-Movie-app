import React, { Component } from "react";
import MovieList from "./MovieList";
import RatingSearch from "./RatingSearch";
import Searchbar from "./Searchbar";

const movielist = [
  {
    id: 1,
    rate: "1",
    img:
      "https://img2.cdn.cinoche.com/images/0fb560a49b0c849c21733c6803579226.jpg",
    title: "Identités",
    year: "2018"
  },
  {
    id: 2,
    rate: "2",
    img:
      "http://freakingeek.com/wp-content/uploads/2018/01/GolemLeTueurDeLondres-Banniere.jpg",
    title: "Golem, le Tueur de Londres",
    year: "2018"
  },
  {
    id: 3,
    rate: "3",
    img:
      "http://www.nosmeilleursfilms.fr/wp-content/uploads/2018/01/Photo-du-film-THE-PASSENGER-770x472.jpg",
    title: "The passenger",
    year: "2018"
  },
  {
    id: 4,
    rate: "4",
    img: "http://fr.web.img4.acsta.net/pictures/17/08/24/15/18/597734.jpg",
    title: "Blade Runner 2049",
    year: "2017"
  }
];
class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRating: 5,
      moviesArr: movielist,
      titlemovie: ""
    };
  }

  getMovies() {
    return this.state.moviesArr.filter(
      el =>
        el.rate <= this.state.minRating &&
        el.title.toLowerCase().includes(this.state.titlemovie.toLowerCase())
    );
  }
  selectMovie = titleMovie => {
    this.setState({
      titlemovie: titleMovie
    });
  };
  addmovie = newmovie => {
    this.setState({
      moviesArr: this.state.moviesArr.concat(newmovie)
    });
  };
  removemovie = id => {
    this.setState({
      moviesArr: this.state.moviesArr.filter(el => el.id !== id)
    });
  };
  render() {
    return (
      <div className="movieApp">
        <header className="movie-header">
          <div className="searchbar">
            <Searchbar getTitle={movieTitle => this.selectMovie(movieTitle)} />
            <RatingSearch
              rating={this.state.minRating}
              onChangerat={indexstar => {
                this.setState({
                  minRating: indexstar
                });
              }}
            />
          </div>
        </header>
        <main className="movie-main">
          <div className="movie-app">
            <MovieList
              movies={this.getMovies()}
              add={this.addmovie}
              remove={this.removemovie}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default MovieApp;
