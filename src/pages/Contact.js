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
    </Container >
  );
}

export default SendEmail;
