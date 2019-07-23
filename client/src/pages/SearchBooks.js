import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import BookResults from "../components/BookResults";

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
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        let results = res.data.items;
        results = results.map(result => {
          result = {
            id: result.id,
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink
        };
        console.log(result);
          return result;
        });
        this.setState({ books: results })
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Search for books down below.</h1>
        </Jumbotron>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br></br>
        <BookResults books={this.state.books} />
      </Container>
    );
  }
}
export default SearchBooks;
