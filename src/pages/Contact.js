import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import email from "../images/email-icon-76.png";
import "../css/Contact.css";

function SendEmail() {
  return (
    <Container>
      <div>
      <Row>
        <Col>
        <a href="mailto:brian@ondeckconsulting.net">
            <h1>Email Me!</h1>
            <div class="drop-container">
              <div class="drop">
              </div>
            </div>
            </a>
        </Col>
      </Row>
      </div>
      {/* <br/>
      <br/> */}
      {/* <div className="contact">
        <div className="clickToEmail">
          <Row>
            <Col>
              <a href="mailto:brian@ondeckconsulting.net">
                <img className="img-responsive" src={email} alt="email" />
              </a>
            </Col>
          </Row>
        </div>
        <div className="emailInfo">
          <Row>
            <Col>
              <text>Email Brian at:</text>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>brian@ondeckconsulting.net</text>
            </Col>
          </Row>
        </div> */}
        {/* <div className="phoneInfo">
          <Row>
            <Col>
              <text>Call Brian:</text>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>512-658-6799</text>
            </Col>
          </Row>
        </div> */}
      {/* </div> */}
    </Container >
  );
}

export default SendEmail;
