import React from "react";
import { Row, Col } from "react-bootstrap";

import "../css/Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <Row>
        <Col>
          <div className="buttonBorder">
            <a
              href="https://docs.google.com/document/d/1bIePAKEDjqNSyCack9ZmcJy_sbAqZW13g80xQq4kGuk/edit?usp=sharing"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <button className="button">Click here for my resume</button>
            </a>
          </div>
        </Col>
      </Row>

    </div>
  );
}
