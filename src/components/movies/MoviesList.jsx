import React from "react";
import MoviesCardItem from "./MoviesCardItem";
import { Col, Container, Row } from "react-bootstrap";

function MoviesList({ movies, handleShow }) {
  return (
    <>
      {movies.map((movie) => (
        <Col key={movie.imdbID} lg={2} md={4} sm={6}>
          <MoviesCardItem
            handleShow={handleShow}
            imdbID={movie.imdbID}
            {...movie}
          />
        </Col>
      ))}
    </>
  );
}

export default MoviesList;
