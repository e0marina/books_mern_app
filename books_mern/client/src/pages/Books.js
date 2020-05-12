//comment to update yet again
//and here we go

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";

class Books extends Component {
  state = {
    result: [],
    bookSearch: "",
  };

  componentDidMount() {
    this.loadBooks("Ready Player One");
  }

  loadBooks = (query) => {
    API.getSearchedBook(query)
      .then((res) =>
        this.setState({
          result: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.loadBooks(this.state.bookSearch);
  };

  handleSaveBook = (id) => {
    const book = this.state.result.items.find((book) => book.id === id);

    API.saveBook({
      key: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    }).then(() => this.loadBooks());
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-8">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.result.items ? (
                <h2 className="text-center">No Books to Display</h2>
              ) : (
                <BookList>
                  {this.state.result.items.map((book) => {
                    return (
                      <div>
                        <BookListItem
                          key={book.id}
                          title={book.volumeInfo.title}
                          href={book.volumeInfo.infoLink}
                          authors={book.volumeInfo.authors}
                          description={book.volumeInfo.description}
                          image={book.volumeInfo.imageLinks.smallThumbnail}
                        />
                        <SaveBtn
                          onClick={() => this.handleSaveBook(book.id)}
                        ></SaveBtn>
                        <hr></hr>
                      </div>
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
