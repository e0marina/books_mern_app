import React from "react";
import { Container, Row, Col } from "../Grid";

//exporting the BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the google books api call
export function BookListItem({ authors, description, image, href, title }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
            <h6>Authors: {authors}</h6>
          </Col>
          <Col size="xs-8 sm-9">
            <h6>Description: {description}</h6>
          </Col>
          <Col size="xs-4 sm-2">
            <img src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h5>{title}</h5>

            <a rel="noreferrer noopener" target="_blank" href={href}>
              Check out the book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
