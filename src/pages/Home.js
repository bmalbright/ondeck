import React from "react";
import { Col, Row } from "react-bootstrap";

import "../css/App.css";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Row>
          <Col className="loader">
            <h1>ON</h1>
            <h1>DECK</h1>
            <h1>CONSULTING</h1>
          </Col>
        </Row>
      </div>

    </div>
  );
}
