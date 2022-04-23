import React from "react";
import { Col, Row } from "react-bootstrap";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Row>
          <Col>
            <p className="name">
              ON
              <br />
              DECK
              <br />
              CONSULTING
              <br />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
