import React from "react";
import { Container, Row, Col } from "../Grid";


var style = {
  color: "white"
};

const SavedBook = props => {
  return (
    <Container>
    <div className="card">
      <h3 style={{ margin: 10 }}>Saved Books</h3>
      <br />
      {props.books.map(book => {
        return (
          <div key={book.bookid} className="card">
          <Container >
            <Row>
              <Col size="xs-4 sm-2">
                <img src={book.image} alt="img" style={{ margin: 10 }} />
              </Col>
              <Col size="xs-8 sm-9">
                <h3 style={{ marginTop: 10 }}>{book.title}</h3>
                <h5>{book.author}</h5>
                <p>{book.description}</p>
                <button className="btn btn-info" style={{ margin: 10 }}>
                  <a href={book.link} rel="noopener noreferrer" target="_blank" style={style}>
                  View Book
                  </a>
                </button>
                
                <button
                   value={book._id}
                  onClick={(e) => { props.deleteBook(e.target.value) }}
                  className="btn btn-success"
                >
                  Delete Book
                </button>
              </Col>
            </Row>

            
          </Container>
          </div>
        );
      })}
    </div>
  </Container>
  );
};
export default SavedBook;
