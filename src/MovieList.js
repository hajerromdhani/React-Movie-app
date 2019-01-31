import React, { Component } from "react";
import MovieCard from "./MovieCard";
import loadingHoc from "./LoadingHoc";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleinput = newmovie => {
    this.setState({
      [newmovie.target.name]: newmovie.target.value
    });
  };

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(el => (
          <MovieCard key={el.id} movies={el} remove={this.props.remove} />
        ))}
        <div className="movie-card">
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            ADD
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    ADD New Movie
                  </h5>

                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <label>id :</label>
                  <input type="text" name="id" onChange={this.handleinput} />
                  <label>Rate :</label>
                  <input type="text" name="rate" onChange={this.handleinput} />
                  <label>image Movie :</label>
                  <input type="text" name="img" onChange={this.handleinput} />
                  <label>Title :</label>
                  <input type="text" name="title" onChange={this.handleinput} />
                  <label>Year :</label>
                  <input type="text" name="year" onChange={this.handleinput} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.add(this.state)}
                  >
                    Save Movie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loadingHoc(MovieList);
