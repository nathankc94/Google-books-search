import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";

class SearchBooks extends Component {
  state = {
    search: "",
    books: []
    
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    API.googleApi(this.state.search)
      .then(res => {
        let results = res.data.items;
        results = results.map(result => {
          result = {
            bookid: result.id,
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink
        };
       
        console.log(result.bookid);
          return result;
        });
        this.setState({ books: results })
      })
      .catch(err => console.error(err));
  };

  
  handleSaveBook = e => {
    e.preventDefault();
    let savedBooks = this.state.books.filter(book => book.bookid === e.target.value)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
        .then(res => {console.log(res);
        alert("Your book has been added!")})
        .catch(err => console.log(err))
}

  render() {
    return (
        <div> <Jumbotron>
          <p style={{ fontSize: 50 }}>Search for books down below.</p>
        </Jumbotron>

      <Container>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br></br>
        <div>
        
        {this.state.books.map(book => 
        <Container key={book.bookid}>
          
          <div  className="card">
              <Row>
                <Col size="xs-4 sm-2">
                  <img src={book.image} alt="img" style={{ margin: 10 }} />
                </Col>
                <Col size="xs-8 sm-9">
                  <h3 style={{ marginTop: 10 }}>{book.title}</h3>
                  <h5>{book.author}</h5>
                  <p>{book.description}</p>
                  <button className="btn btn-info" style={{ margin: 10 }}>
                    <a href={book.link} rel="noopener noreferrer" target="_blank" style={{color: "white"}}>
                    View Book
                    </a>
                  </button>
                  <button
                    value={book.bookid}
                    onClick={this.handleSaveBook}
                    className="btn btn-success">
                    Save Book
                  </button>
                </Col>
              </Row>         
            </div>
        </Container> 
        )}


        </div>
      </Container></div>
       
    );
  }
}
export default SearchBooks;
