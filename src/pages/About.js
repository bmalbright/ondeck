import React from "react";
import { Col, Row } from "react-bootstrap";
import "../css/App.css";

export default function About() {
  return (
    <div>
        <Row>
          <Col>
            <p className="paragraph">
              Hi, I'm Brian Albright, and I founded On Deck Consulting in 2019
              primarily as an aquatic safety and competitive swimming focused
              consulting firm based in Austin, TX. You can read more about my
              30+ year background in aquatics by clicking on the aquatics page.
              I recently pivoted to a career change to tech, taking a full stack
              web developer program through UT Austin. As a result, I am also
              offering web design and development services through On Deck
              Consulting.
              <br />
              <br />
              The service I'm primarily offering through On Deck Consulting
              right now is as a public address announcer. I've been announcing
              swim meets for over 20 years, and am known throughout the swim
              community. I mostly announce in Texas but am willing to travel.
              Contact me if you're looking for a professional public address
              announcer to raise the level of your swim meet.
            </p>
          </Col>
        </Row>
    </div>
  );
}
