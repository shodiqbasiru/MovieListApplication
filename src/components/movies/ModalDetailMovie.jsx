import React from "react";
import { Col, Container, Image, ListGroup, Modal, Row } from "react-bootstrap";

function ModalDetailMovie({
  imdbID,
  title,
  poster,
  released,
  runtime,
  genre,
  ratings,
  actors,
  plot,
  show,
  handleClose,
  addToList,
}) {
  return (
    <Modal size="lg" show={show} onHide={handleClose} className="my-modal">
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-between">
            <Col lg={4} className="mb-3">
              <Image src={poster} alt={title} fluid />
            </Col>

            <Col lg={8}>
              <ListGroup>
                <ListGroup.Item variant="dark">
                  Released : {released}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Runtime : {runtime}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">Genre : {genre}</ListGroup.Item>
                <ListGroup.Item variant="dark">
                  {ratings && ratings.length > 0 ? (
                    ratings.map((rating) => (
                      <p key={rating.Source}>
                        {rating.Source} : {rating.Value}
                      </p>
                    ))
                  ) : (
                    <p>Rating Not Found</p>
                  )}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Actors : {actors}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Plot : <br />
                  {plot}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-success" onClick={() => addToList(imdbID)}>
          Save to My List Movies
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetailMovie;
