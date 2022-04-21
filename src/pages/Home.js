import React from "react";
import { Col, Row, ThemeProvider } from "react-bootstrap";

import "../css/App.css";

export default function Home() {
  return (
    <div className="home">
      <ThemeProvider breakpoints={[ 'xxl', 'xl', 'lg', 'md', 'sm', 'xs',]}>
      <div>
        <Row>
          <Col className="loader">
            <h1>ON</h1>
            <h1>DECK</h1>
            <h1>CONSULTING</h1>
          </Col>
        </Row>
      </div>
      </ThemeProvider>


    </div>
  );
}
