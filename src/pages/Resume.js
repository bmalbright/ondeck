import React from "react";
import { Row, Col } from "react-bootstrap";

import "../css/App.css";

export default function Resume() {
  return (
    <div className="resume">
      <Row>
        <Col>
          <div className="buttonBorder">
            <a
              href="https://docs.google.com/document/d/1uoeOo8BgYKWQBJQgVuNGTcp6-zfbpPZu6XKrbIvy2jk/edit?usp=sharing"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <button className="button">Click here for my resume</button>
            </a>
          </div>
        </Col>
      </Row>
      {/* <Row className="tech">
        <Col>
          <h3 className="title">Full Stack Web Developer</h3>
          <Row>
            <Col>
              <ul>
                <li>Javascript</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>jQuery</li>
                <li>MySQL</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>Node</li>
                <li>Bootstrap</li>
                <li>GraphQL</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </div>
  );
}
