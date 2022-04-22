import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <Row>
        <Col>
          <a
            href="https://docs.google.com/document/d/1bIePAKEDjqNSyCack9ZmcJy_sbAqZW13g80xQq4kGuk/edit?usp=sharing"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <h1>Click here for my resume</h1>
            <div class="drop-container">
              <div class="drop"></div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}
