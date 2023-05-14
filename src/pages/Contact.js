import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Contact.css";

function SendEmail() {
  return (
    <Container>
      <br/>
      <br/>
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
