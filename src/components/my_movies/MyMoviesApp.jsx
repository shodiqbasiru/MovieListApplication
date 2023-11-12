import React from "react";
import { getMyListMovies } from "../../data/data_storage";
import MoviesList from "../movies/MoviesList";
import { Container, Row } from "react-bootstrap";

class MyMoviesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myListMovies: getMyListMovies(),
    };
  }

  render() {
    return (
      <Container className="p-3 mt-3" fluid>
        <Row>
          <h1 className="mt-5 mb-3">My List Movies</h1>
          <MoviesList
            movies={this.state.myListMovies}
            handleShow={this.onHandleShow}
          />
        </Row>
      </Container>
    );
  }
}

export default MyMoviesApp;
