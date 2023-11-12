import React from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class MoviesSearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler = (e) => {
    const searchValue = e.target.value;
    this.setState(() => ({ searchValue }));

    this.props.onSearch(searchValue);
  };

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center my-5">
            <Col md={5}>
              <h1 className="text-center mb-3">Search Movies</h1>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter up to 3 keywords to search movies..."
                  value={this.state.searchValue}
                  onChange={this.onSearchHandler}
                />
                <InputGroup.Text id="basic-addon2">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MoviesSearchItem;
