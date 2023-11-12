import React from "react";
import { Container, Row } from "react-bootstrap";

import MoviesSearchItem from "./MoviesSearchItem";
import MoviesList from "./MoviesList";
import { getMovie, getMovies } from "../../data/data_api";
import { MOVIES_STORAGE_KEY } from "../../data/data_storage";
import ModalDetailMovie from "./ModalDetailMovie";

class MoviesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchValue: "",
      myListMovies: [],
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onHandleShow = this.onHandleShow.bind(this);
    this.onHandleClose = this.onHandleClose.bind(this);
    this.onAddTolist = this.onAddTolist.bind(this);
  }

  onSearchHandler = (searchValue) => {
    getMovies(searchValue).then((movies) => {
      this.setState({ movies, searchValue });
    });

    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.Title.toLowerCase().includes(searchValue.toLowerCase());
    });

    this.setState({ movies: filteredMovies, searchValue });
  };

  onHandleShow = (imdbID) => {
    this.setState({ show: true, selectedMovie: imdbID });
    getMovie(imdbID).then((movie) => {
      this.setState({ selectedMovie: movie });
    });
  };

  onHandleClose = () => this.setState({ show: false });

  onAddTolist = () => {
    const { myListMovies, selectedMovie } = this.state;
    myListMovies.push(selectedMovie);

    if (localStorage.getItem(MOVIES_STORAGE_KEY) === null) {
      localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(myListMovies));
    } else {
      const movies = JSON.parse(localStorage.getItem(MOVIES_STORAGE_KEY));
      movies.push(selectedMovie);
      localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(movies));
    }

    this.setState({ myListMovies, show: false });
  };

  render() {
    const { movies, searchValue } = this.state;
    return (
      <>
        <div className="p-3 mt-3">
          <MoviesSearchItem onSearch={this.onSearchHandler} />
          <Container fluid>
            <Row className="h-25">
              {searchValue === "" ? (
                <h1 className="text-center">Let's Find Movies</h1>
              ) : movies && movies.length > 0 ? (
                <MoviesList movies={movies} handleShow={this.onHandleShow} />
              ) : (
                <h1 className="text-center">No Movies Found</h1>
              )}
            </Row>
          </Container>
        </div>
        <ModalDetailMovie
          show={this.state.show}
          handleClose={this.onHandleClose}
          title={this.state.selectedMovie && this.state.selectedMovie.Title}
          poster={this.state.selectedMovie && this.state.selectedMovie.Poster}
          released={
            this.state.selectedMovie && this.state.selectedMovie.Released
          }
          runtime={this.state.selectedMovie && this.state.selectedMovie.Runtime}
          genre={this.state.selectedMovie && this.state.selectedMovie.Genre}
          ratings={this.state.selectedMovie && this.state.selectedMovie.Ratings}
          actors={this.state.selectedMovie && this.state.selectedMovie.Actors}
          plot={this.state.selectedMovie && this.state.selectedMovie.Plot}
          addToList={this.onAddTolist}
        />
      </>
    );
  }
}

export default MoviesApp;
