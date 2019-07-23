import React from "react";
import "./style.css";
import { Row, Col, Container } from "../Grid";
import { PromiseProvider } from "mongoose";
var style = {
	color:'black'
};
const SearchResult = props => {
  return (
    <Container>
      <div>
        <h2>Book Results</h2>
        <br></br>
        {props.books.map(book => {
          return (
            <Container key={book.id}>
              <Row>
                <Col size="xs-4 sm-2">
                  <img src={book.image} />
                </Col>
                <Col size="xs-8 sm-9">
                  <h3>{book.title}</h3>
                  <h5>{book.author}</h5>
                  <p>{book.description}</p>
                  <button><a href={book.link} target="_blank" style={style}>View Book </a></button>
                </Col>
              </Row>
              <br></br>
            </Container>
          );
        })}
      </div>
    </Container>
  );
};
export default SearchResult;
