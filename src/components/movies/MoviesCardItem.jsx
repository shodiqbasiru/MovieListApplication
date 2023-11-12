import React from "react";
import { Card } from "react-bootstrap";

function MoviesCardItem({ Poster, Title, Year, handleShow, imdbID }) {
  return (
    <Card className="mb-3 my-card">
      <Card.Img variant="top" src={Poster} alt={Title} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Subtitle className="mb-2">{Year}</Card.Subtitle>

        <Card.Link onClick={() => handleShow(imdbID)} href="#">
          Detail
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MoviesCardItem;
